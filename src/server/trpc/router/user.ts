import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { TRPCError } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import { User } from "../../../types";
import { OnlineStatus } from "@prisma/client";

const ee = new EventEmitter();
export const userRouter = router({
  joinServer: protectedProcedure
    .input(z.object({ userId: z.string(), serverId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.findUnique({
        where: { id: input.serverId },
      });
      if (!server) throw new TRPCError({ code: "NOT_FOUND" });
      const everyoneRole = await ctx.prisma.role.findFirst({
        where: { serverid: input.serverId, name: "everyone" },
      });
      if (!everyoneRole) throw new TRPCError({ code: "NOT_FOUND" });
      await ctx.prisma.server.update({
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

      const update = await ctx.prisma.user.update({
        where: {
          id: input.userId,
        },
        data: {
          roles: {
            connect: {
              id: everyoneRole.id,
            },
          },
        },
      });

      ee.emit("joinServer", update);
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
  updateUser: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        image: z.string().optional(),
        status: z.nativeEnum(OnlineStatus).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const update = await ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          image: input.image,
          name: input.name,
          status: input.status,
        },
      });
      ee.emit("updateUser", update);
      return update;
    }),
  onUpdateUser: protectedProcedure.subscription(() => {
    return observable<User>((emit) => {
      const onUpdate = (data: User) => emit.next(data);
      ee.on("updateUser", onUpdate);
      return () => {
        ee.off("updateUser", onUpdate);
      };
    });
  }),
  leaveServer: protectedProcedure
    .input(z.object({ userId: z.string(), serverId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });
      await ctx.prisma.server.update({
        where: { id: input.serverId },
        data: { users: { disconnect: { id: input.userId } } },
      });
      const everyoneRole = await ctx.prisma.role.findFirst({
        where: { serverid: input.serverId, name: "everyone" },
      });
      if (!everyoneRole) throw new TRPCError({ code: "NOT_FOUND" });
      const update = await ctx.prisma.user.update({
        where: {
          id: input.userId,
        },
        data: {
          roles: {
            disconnect: {
              id: everyoneRole.id,
            },
          },
        },
      });

      ee.emit("leaveServer", update);
      return update;
    }),
  onLeaveServer: protectedProcedure.subscription(() => {
    return observable<User>((emit) => {
      const onJoin = (data: User) => emit.next(data);
      ee.on("leaveServer", onJoin);
      return () => {
        ee.off("leaveServer", onJoin);
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
