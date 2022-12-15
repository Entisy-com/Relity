import { NotificationType, Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import EventEmitter from "events";
import { z } from "zod";
import { FriendRequest } from "../../../types";
import { protectedProcedure, router } from "../trpc";
import { defaultInclude as defaultUserInclude } from "./user";

const ee = new EventEmitter();

const defaultInclude = Prisma.validator<Prisma.FriendRequestInclude>()({
  target: {
    include: defaultUserInclude,
  },
  sender: {
    include: defaultUserInclude,
  },
});

export const friendRequestRouter = router({
  getSentFriendRequestsByUserId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const friendRequests = await ctx.prisma.friendRequest.findMany({
        where: {
          senderId: input.id,
        },
        include: defaultInclude,
      });
      return friendRequests;
    }),
  getReceivedFriendRequestsByUserId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const friendRequests = await ctx.prisma.friendRequest.findMany({
        where: {
          targetId: input.id,
        },
        include: defaultInclude,
      });
      return friendRequests;
    }),
  sendFriendRequest: protectedProcedure
    .input(z.object({ target: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const flag1 = await ctx.prisma.friendRequest.findFirst({
        where: {
          senderId: ctx.session.user.id,
          targetId: input.target,
        },
      });
      if (flag1) return flag1;
      const flag2 = await ctx.prisma.friendRequest.findFirst({
        where: {
          senderId: input.target,
          targetId: ctx.session.user.id,
        },
        include: defaultInclude,
      });
      if (flag2) {
        //update sender
        const sender = await ctx.prisma.user.update({
          where: {
            id: flag2.senderId,
          },
          data: {
            friends: {
              connect: {
                id: flag2.targetId,
              },
            },
          },
        });
        //update target
        const target = await ctx.prisma.user.update({
          where: {
            id: flag2.targetId,
          },
          data: {
            friends: {
              connect: {
                id: flag2.senderId,
              },
            },
          },
        });
        //delete request
        await ctx.prisma.friendRequest.delete({
          where: {
            id: flag2.id,
          },
        });
        //notify sender
        await ctx.prisma.notification.create({
          data: {
            message: `${flag2.target.name} Accepted your Friend Request`,
            read: false,
            notificationType: NotificationType.FRIEND_REQUEST_ACCEPTED,
            user: {
              connect: {
                id: ctx.session.user.id,
              },
            },
          },
        });
        return flag2;
      }
      const friendRequest = await ctx.prisma.friendRequest.create({
        data: {
          sender: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          target: {
            connect: {
              id: input.target,
            },
          },
        },
        include: defaultInclude,
      });
      if (!friendRequest) throw new TRPCError({ code: "BAD_REQUEST" });
      //notify sender
      await ctx.prisma.notification.create({
        data: {
          message: `Friend Request sent to ${friendRequest.target.name}`,
          read: false,
          notificationType: NotificationType.FRIEND_REQUEST_SENT,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
      //notify target
      await ctx.prisma.notification.create({
        data: {
          message: `Friend Request received from ${friendRequest.sender.name}`,
          read: false,
          notificationType: NotificationType.FRIEND_REQUEST_RECEIVED,
          user: {
            connect: {
              id: input.target,
            },
          },
        },
      });
      ee.emit("friendRequest", friendRequest);
      return friendRequest;
    }),
  acceptFriendRequest: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const friendRequest = await ctx.prisma.friendRequest.findUnique({
        where: {
          id: input.id,
        },
        include: defaultInclude,
      });
      if (!friendRequest) throw new TRPCError({ code: "NOT_FOUND" });
      //update sender
      const sender = await ctx.prisma.user.update({
        where: {
          id: friendRequest.senderId,
        },
        data: {
          friends: {
            connect: {
              id: friendRequest.targetId,
            },
          },
        },
      });
      //update target
      const target = await ctx.prisma.user.update({
        where: {
          id: friendRequest.targetId,
        },
        data: {
          friends: {
            connect: {
              id: friendRequest.senderId,
            },
          },
        },
      });
      //notify sender
      await ctx.prisma.notification.create({
        data: {
          message: `${friendRequest.target.name} Accepted your Friend Request`,
          read: false,
          notificationType: NotificationType.FRIEND_REQUEST_DECLINED,
          user: {
            connect: {
              id: friendRequest.senderId,
            },
          },
        },
      });
      //delete request
      await ctx.prisma.friendRequest.delete({
        where: {
          id: input.id,
        },
      });
      // ee.emit("acceptFriendRequest", friendRequest);
      // return friendRequest;
    }),
  declineFriendRequest: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const friendRequest = await ctx.prisma.friendRequest.findUnique({
        where: {
          id: input.id,
        },
        include: defaultInclude,
      });
      if (!friendRequest) throw new TRPCError({ code: "NOT_FOUND" });
      //notify sender
      await ctx.prisma.notification.create({
        data: {
          message: `${friendRequest.target.name} Declined your Friend Request`,
          read: false,
          notificationType: NotificationType.FRIEND_REQUEST_DECLINED,
          user: {
            connect: {
              id: friendRequest.senderId,
            },
          },
        },
      });
      //delete request
      await ctx.prisma.friendRequest.delete({
        where: {
          id: input.id,
        },
      });
      // ee.emit("acceptFriendRequest", friendRequest);
      // return friendRequest;
    }),
  onFriendRequest: protectedProcedure.subscription(() => {
    return observable<FriendRequest>((emit) => {
      const onFriendRequest = (data: FriendRequest) => emit.next(data);
      ee.on("friendRequest", onFriendRequest);
      return () => {
        ee.off("friendRequest", onFriendRequest);
      };
    });
  }),
});
