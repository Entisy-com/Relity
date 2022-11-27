import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import { TRPCError } from "@trpc/server";

const ee = new EventEmitter();
export const userRouter = router({
  joinServer: protectedProcedure
    .input(z.object({ userId: z.string(), serverId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const server = ctx.prisma.server.findUnique({
        where: { id: input.serverId },
      });
      if (!server) throw new TRPCError({ code: "NOT_FOUND" });
      const update = ctx.prisma.server.update({
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
      return update;
    }),
});
