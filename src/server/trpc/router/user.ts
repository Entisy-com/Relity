import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { TRPCError } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import type { User, Member, Role } from "../../../types";
import { OnlineStatus, Permission } from "@prisma/client";

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
        where: { serverid: input.serverId, name: "Member" },
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
          roles: {
            connect: {
              id: everyoneRole.id,
            },
          },
        },
      });

      ee.emit("joinServer", member);
      return member;
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
        roles: z.array(z.string()).optional(),
        nickname: z.string().optional(),
        banner: z.string().optional(),
        pfp: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const memberRoles = await ctx.prisma.member.findUnique({
        where: { id: input.id },
        select: { roles: true },
      });
      for (const role of memberRoles?.roles ?? []) {
        await ctx.prisma.role.update({
          where: { id: role.id },
          data: { members: { disconnect: { id: input.id } } },
        });
      }
      for (const roleId of input.roles ?? []) {
        await ctx.prisma.role.update({
          where: { id: roleId },
          data: { members: { connect: { id: input.id } } },
        });
      }

      const member = await ctx.prisma.member.update({
        where: { id: input.id },
        data: {
          nickname: input.nickname,
          banner: input.banner,
          pfp: input.pfp,
        },
        include: {
          roles: true,
          mentionedIn: true,
          messages: true,
          user: true,
          ownerOf: true,
          server: true,
          voiceChannel: true,
        },
      });
      ee.emit("updateMember", member);
      return member;
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
          member: true,
          serverUserPosition: true,
          adminuser: true,
          settings: true,
          bannedon: true,
          friends: {
            include: {
              member: true,
              serverUserPosition: true,
              adminuser: true,
              settings: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
            },
          },
          friendsWith: true,
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
  getUserByMemberId: protectedProcedure
    .input(z.object({ memberId: z.string() }))
    .query(async ({ ctx, input }) => {
      const member = await ctx.prisma.user.findFirst({
        where: {
          member: {
            some: {
              id: input.memberId,
            },
          },
        },
        include: {
          member: true,
          serverUserPosition: true,
          adminuser: true,
          settings: true,
          bannedon: true,
          friends: true,
          friendsWith: true,
        },
      });
      if (!member) throw new TRPCError({ code: "NOT_FOUND" });
      return member;
    }),
  getFriendsByUserId: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      const friends = await ctx.prisma.user.findMany({
        where: {
          friends: {
            some: {
              id: input.userId,
            },
          },
        },
        include: {
          member: true,
          serverUserPosition: true,
          adminuser: true,
          settings: true,
          bannedon: true,
          friends: {
            include: {
              member: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              settings: true,
              serverUserPosition: true,
            },
          },
          friendsWith: true,
        },

        take: limit + 1,
        cursor: cursor
          ? {
              id: cursor,
            }
          : undefined,
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (friends.length > limit) {
        const nextFriend = friends.pop()!;
        nextCursor = nextFriend.id;
      }
      return { friends, nextCursor };
    }),
  addFriend: protectedProcedure
    .input(z.object({ target: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // update target
      const target = await ctx.prisma.user.update({
        where: {
          id: input.target,
        },
        data: {
          friends: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
        include: {
          member: true,
          serverUserPosition: true,
          adminuser: true,
          settings: true,
          bannedon: true,
          friends: {
            include: {
              member: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              settings: true,
              serverUserPosition: true,
            },
          },
          friendsWith: true,
        },
      });
      // update self
      const user = await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          friends: {
            connect: {
              id: input.target,
            },
          },
        },
        include: {
          member: true,
          serverUserPosition: true,
          adminuser: true,
          settings: true,
          bannedon: true,
          friends: {
            include: {
              member: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              settings: true,
              serverUserPosition: true,
            },
          },
          friendsWith: true,
        },
      });
      ee.emit("addFriend", user, target);
      return user.friends;
    }),
  onFriendAdd: protectedProcedure.subscription(() => {
    return observable<User[]>((emit) => {
      const onAdd = (data: User[]) => emit.next(data);
      ee.on("addFriend", onAdd);
      return () => {
        ee.off("addFriend", onAdd);
      };
    });
  }),
  searchUser: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      const users = await ctx.prisma.user.findMany({
        where: {
          name: {
            contains: input.name,
          },
        },
        include: {
          adminuser: true,
          bannedon: true,
          friends: {
            include: {
              member: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              settings: true,
              serverUserPosition: true,
            },
          },
          friendsWith: true,
          member: true,
          serverUserPosition: true,
          settings: true,
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (users.length > limit) {
        const nextFriend = users.pop()!;
        nextCursor = nextFriend.id;
      }
      ee.emit("searchUpdate", users);
      return { users, nextCursor };
    }),
  onUserSearchUpdate: protectedProcedure.subscription(() => {
    return observable<User[]>((emit) => {
      const onSearchUpdate = (data: User[]) => emit.next(data);
      ee.on("searchUpdate", onSearchUpdate);
      return () => {
        ee.off("searchUpdate", onSearchUpdate);
      };
    });
  }),
});
