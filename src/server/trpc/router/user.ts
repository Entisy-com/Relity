import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { TRPCError } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import type { User, Member, Role } from "../../../types";
import { OnlineStatus, Permission } from "@prisma/client";

const ee = new EventEmitter();

export const userRouter = router({
  createUserSettings: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.userId },
        include: {
          settings: true,
        },
      });
      if (user?.settings) return user;
      const update = await ctx.prisma.user.update({
        where: {
          id: input.userId,
        },
        data: {
          settings: {
            create: {
              notifyBan: true,
              notifyKick: true,
              notifyUnban: true,
              theme: "default",
            },
          },
        },
      });
      return update;
    }),
  getUserById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.id },
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
      return user;
    }),
  getUserByMemberId: protectedProcedure
    .input(z.object({ memberId: z.string() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findFirst({
        where: {
          member: {
            some: {
              id: input.memberId,
            },
          },
        },
      });
      return user;
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
          friends: true,
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
          friends: true,
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
          friends: true,
          friendsWith: true,
        },
      });
      ee.emit("addFriend", user, target);
      return user.friends;
    }),
  updateSettings: protectedProcedure
    .input(
      z.object({
        theme: z.string().optional(),
        notifyBan: z.boolean().optional(),
        notifyKick: z.boolean().optional(),
        notifyUnban: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.update({
        where: {
          id: ctx.session.user?.id,
        },
        data: {
          settings: {
            update: {
              theme: input.theme,
              notifyBan: input.notifyBan,
              notifyKick: input.notifyKick,
              notifyUnban: input.notifyUnban,
            },
          },
        },
      });
      ee.emit("updateSettings", user);
    }),
  onUpdateSettings: protectedProcedure.subscription(() => {
    return observable<User>((emit) => {
      const onUpdateSettings = (data: User) => emit.next(data);
      ee.on("updateSettings", onUpdateSettings);
      return () => {
        ee.off("updateSettings", onUpdateSettings);
      };
    });
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
  onFriendAdd: protectedProcedure.subscription(() => {
    return observable<User[]>((emit) => {
      const onAdd = (data: User[]) => emit.next(data);
      ee.on("addFriend", onAdd);
      return () => {
        ee.off("addFriend", onAdd);
      };
    });
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
});
