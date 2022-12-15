import { NotificationType, Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import EventEmitter from "events";
import { userAgent } from "next/server";
import { z } from "zod";
import { FriendRequest } from "../../../types";
import { protectedProcedure, router } from "../trpc";

const ee = new EventEmitter();

const defaultInclude = Prisma.validator<Prisma.NotificationInclude>()({
  user: true,
});

export const notificationRouter = router({
  getNotificationsByUserId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const notifications = await ctx.prisma.notification.findMany({
        where: {
          userId: input.id,
        },
        include: defaultInclude,
      });
      return notifications;
    }),
  createNotification: protectedProcedure
    .input(
      z.object({
        target: z.string(),
        message: z.string(),
        type: z.nativeEnum(NotificationType),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const notification = await ctx.prisma.notification.create({
        data: {
          message: input.message,
          read: false,
          notificationType: input.type,
          user: {
            connect: {
              id: input.target,
            },
          },
        },
        include: defaultInclude,
      });
      ee.emit("createNotification", notification);
      return notification;
    }),
  updateNotification: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const notification = await ctx.prisma.notification.update({
        where: {
          id: input.id,
        },
        data: {
          read: true,
        },
      });
      ee.emit("updateNotification", notification);
      return notification;
    }),
  updateNotifications: protectedProcedure
    .input(z.object({ userid: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const notifications = await ctx.prisma.notification.updateMany({
        where: {
          userId: input.userid,
        },
        data: {
          read: true,
        },
      });
      ee.emit("updateNotifications", notifications);
      return notifications;
    }),
  onCreateNotification: protectedProcedure.subscription(() => {
    return observable<Notification>((emit) => {
      const onCreateNotification = (data: Notification) => emit.next(data);
      ee.on("createNotification", onCreateNotification);
      return () => {
        ee.off("createNotification", onCreateNotification);
      };
    });
  }),
  onUpdateNotification: protectedProcedure.subscription(() => {
    return observable<Notification>((emit) => {
      const onUpdateNotification = (data: Notification) => emit.next(data);
      ee.on("updateNotification", onUpdateNotification);
      return () => {
        ee.off("updateNotification", onUpdateNotification);
      };
    });
  }),
  onUpdateNotifications: protectedProcedure.subscription(() => {
    return observable<Notification[]>((emit) => {
      const onUpdateNotifications = (data: Notification[]) => emit.next(data);
      ee.on("updateNotifications", onUpdateNotifications);
      return () => {
        ee.off("updateNotifications", onUpdateNotifications);
      };
    });
  }),
});
