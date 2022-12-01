import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { TRPCError } from "@trpc/server";
import { Prisma, User } from "@prisma/client";
import { observable } from "@trpc/server/observable";

const defaultUserSelect = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  name: true,
  email: true,
  image: true,
  status: true,
  messages: true,
  server: true,
  bannedon: true,
  ownerof: true,
  roles: true,
  settings: true,
  voicechannel: true,
  updatedAt: true,
  createdAt: true,
});
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
        select: defaultUserSelect,
        where: { id: input.userId },
      });
      return { user };
    }),
});
