import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { TRPCError } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import { User } from "../../../types";

const ee = new EventEmitter();
export const userRouter = router({
  joinServer: protectedProcedure
    .input(z.object({ userId: z.string(), serverId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.findUnique({
        where: { id: input.serverId },
      });
      if (!server) throw new TRPCError({ code: "NOT_FOUND" });
      const update = await ctx.prisma.server.update({
        where: {
          id: input.serverId,
        },
        data: {
          users: {
            connect: {
              id: input.userId,
            },
          },
        },
      });

      ee.emit("joinServer", server);
      return update;
    }),
  onJoinServer: protectedProcedure.subscription(() => {
    return observable<User>((emit) => {
      const onJoin = (data: User) => emit.next(data);
      ee.on("joinServer", onJoin);
      return () => {
        ee.off("joinServer", onJoin);
      };
    });
  }),
  getUser: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.userId },
        include: {
          accounts: true,
          adminuser: true,
          bannedon: true,
          friends: true,
          friendsWith: true,
          mentionedin: true,
          messages: true,
          ownerof: true,
          roles: true,
          server: true,
          sessions: true,
          settings: true,
          voicechannel: true,
        },
      });
      return { user };
    }),
});
