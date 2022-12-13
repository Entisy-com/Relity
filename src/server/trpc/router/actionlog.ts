import { Action } from "@prisma/client";
import { observable } from "@trpc/server/observable";
import EventEmitter from "events";
import { z } from "zod";
import { ActionType } from "../../../types";
import { protectedProcedure, router } from "../trpc";

const ee = new EventEmitter();

export const actionlogRouter = router({
  addActionToActionLog: protectedProcedure
    .input(
      z.object({
        serverid: z.string(),
        action: z.nativeEnum(Action),
        memberId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const update = await ctx.prisma.actionType.create({
        data: {
          action: input.action,
          actionlog: {
            connectOrCreate: {
              where: {
                serverId: input.serverid,
              },
              create: {
                server: {
                  connect: {
                    id: input.serverid,
                  },
                },
              },
            },
          },
          member: {
            connect: {
              id: input.memberId,
            },
          },
        },
      });
      ee.emit("updatedLog", update);
      return update;
    }),
  getActionLogFromServer: protectedProcedure
    .input(z.object({ serverId: z.string() }))
    .query(async ({ input, ctx }) => {
      const log = await ctx.prisma.actionLog.findFirst({
        where: {
          serverId: input.serverId,
        },
        include: {
          actions: {
            include: {
              member: {
                include: {
                  user: true,
                },
              },
            },
          },
          server: true,
        },
      });
      return log;
    }),
  onAddActionToActionLog: protectedProcedure.subscription(() => {
    return observable<ActionType>((emit) => {
      const onCreate = (data: ActionType) => emit.next(data);
      ee.on("updatedLog", onCreate);
      return () => {
        ee.off("updatedLog", onCreate);
      };
    });
  }),
});
