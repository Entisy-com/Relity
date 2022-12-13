import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import type { Message } from "../../../types";
import { triggerAsyncId } from "async_hooks";

const ee = new EventEmitter();
export const messageRouter = router({
  createMessage: protectedProcedure
    .input(
      z.object({
        content: z.string(),
        channelId: z.string(),
        authorId: z.string(),
        color: z.string().nullish(),
        backgroundColor: z.string().nullish(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const message = await ctx.prisma.message.create({
        data: {
          content: input.content,
          color: input.color,
          backgroundColor: input.color,
          author: {
            connect: {
              id: input.authorId,
            },
          },
          textChannel: {
            connect: { id: input.channelId },
          },
        },
        include: {
          author: true,
          mentionedRoles: true,
          mentionedMembers: true,
          textChannel: true,
        },
      });
      ee.emit("addMessage", message);
      return message;
    }),
  deleteMessage: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const message = await ctx.prisma.message.delete({
        where: { id: input.id },
        include: {
          author: true,
          mentionedRoles: true,
          mentionedMembers: true,
          textChannel: true,
        },
      });
      ee.emit("removeMessage", message);
      return message;
    }),
  getMessageById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const message = await ctx.prisma.message.findUnique({
        where: {
          id: input.id,
        },
        include: {
          author: true,
          mentionedRoles: true,
          mentionedMembers: true,
          textChannel: true,
        },
      });
      return message;
    }),
  getMessagesByChannelId: protectedProcedure
    .input(z.object({ channelid: z.string() }))
    .query(async ({ input, ctx }) => {
      const messages = await ctx.prisma.message.findMany({
        where: {
          textChannelId: input.channelid,
        },
        include: {
          author: {
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
          },
          mentionedRoles: true,
          mentionedMembers: true,
          textChannel: true,
        },
      });
      return messages;
    }),
  getMessages: protectedProcedure
    .input(
      z.object({
        channelId: z.string(),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      const messages = await ctx.prisma.message.findMany({
        take: limit + 1,
        where: { textChannelId: input.channelId },
        include: {
          author: true,
          mentionedRoles: true,
          mentionedMembers: true,
          textChannel: true,
        },
        cursor: cursor
          ? {
              id: cursor,
            }
          : undefined,
        orderBy: { createdAt: "desc" },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (messages.length > limit) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const nextMessage = messages.pop()!;
        nextCursor = nextMessage.id;
      }
      return {
        messages: messages.reverse(),
        nextCursor,
      };
    }),
  onMessageCreate: protectedProcedure.subscription(() => {
    return observable<Message>((emit) => {
      const onCreate = (data: Message) => emit.next(data);
      ee.on("addMessage", onCreate);
      return () => {
        ee.off("addMessage", onCreate);
      };
    });
  }),
  onMessageDelete: protectedProcedure.subscription(() => {
    return observable<Message>((emit) => {
      const onDelete = (data: Message) => emit.next(data);
      ee.on("removeMessage", onDelete);
      return () => {
        ee.off("removeMessage", onDelete);
      };
    });
  }),
});
