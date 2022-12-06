import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { TRPCError } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import type { User, Member } from "../../../types";
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
      const member = await ctx.prisma.member.create({
        data: {
          server: {
            connect: {
              id: server.id,
            },
          },
          user: {
            connect: {
              id: input.userId,
            },
          },
        },
      });

      const update = await ctx.prisma.member.update({
        where: {
          id: member.id,
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
  updateMember: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        image: z.string().optional(),
        banner: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const update = await ctx.prisma.member.update({
        where: {
          id: input.id,
        },
        data: {
          pfp: input.image,
          nickname: input.name,
          banner: input.banner,
        },
      });
      ee.emit("updateMember", update);
      return update;
    }),
  onUpdateMember: protectedProcedure.subscription(() => {
    return observable<Member>((emit) => {
      const onUpdate = (data: Member) => emit.next(data);
      ee.on("updateMember", onUpdate);
      return () => {
        ee.off("updateMember", onUpdate);
      };
    });
  }),
  leaveServer: protectedProcedure
    .input(z.object({ memberId: z.string(), serverId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const member = await ctx.prisma.member.findUnique({
        where: { id: input.memberId },
      });
      if (!member) throw new TRPCError({ code: "NOT_FOUND" });

      const everyoneRole = await ctx.prisma.role.findFirst({
        where: { serverid: input.serverId, name: "everyone" },
      });
      if (!everyoneRole) throw new TRPCError({ code: "NOT_FOUND" });
      const update = await ctx.prisma.member.update({
        where: {
          id: input.memberId,
        },
        data: {
          roles: {
            disconnect: {
              id: everyoneRole.id,
            },
          },
        },
      });
      await ctx.prisma.member.delete({
        where: { id: input.memberId },
      });
      ee.emit("leaveServer", update);
      return update;
    }),
  onLeaveServer: protectedProcedure.subscription(() => {
    return observable<Member>((emit) => {
      const onJoin = (data: Member) => emit.next(data);
      ee.on("leaveServer", onJoin);
      return () => {
        ee.off("leaveServer", onJoin);
      };
    });
  }),
  getUserById: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.userId },
        include: {
          adminuser: true,
          bannedon: true,
          friends: true,
          friendsWith: true,
          settings: true,
          member: true,
          // add status after migrate
        },
      });
      return user;
    }),
  getMemberById: protectedProcedure
    .input(z.object({ memberId: z.string() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.member.findUnique({
        where: { id: input.memberId },
        include: {
          actionType: true,
          mentionedIn: true,
          messages: true,
          ownerOf: true,
          roles: true,
          server: true,
          user: true,
          voiceChannel: true,
        },
      });
      return user;
    }),
  getMemberByUserId: protectedProcedure
    .input(z.object({ userId: z.string(), serverId: z.string() }))
    .query(async ({ ctx, input }) => {
      const member = await ctx.prisma.member.findFirst({
        where: {
          serverId: input.serverId,
          userId: input.userId,
        },
        include: {
          actionType: true,
          mentionedIn: true,
          messages: true,
          ownerOf: true,
          roles: true,
          server: true,
          user: true,
          voiceChannel: true,
        },
      });
      if (!member) throw new TRPCError({ code: "NOT_FOUND" });
      return member;
    }),
});
