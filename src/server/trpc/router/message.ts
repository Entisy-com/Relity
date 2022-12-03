import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import { Message } from "../../../types";

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
        },
      });
      ee.emit("addMessage", message);
      return message;
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
  deleteMessage: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const message = await ctx.prisma.message.delete({
        where: { id: input.id },
      });
      ee.emit("removeMessage", message);
      return message;
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
  getMessageById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const server = await ctx.prisma.message.findUnique({
        where: {
          id: input.id,
        },
      });
      return server;
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
          mentionedUser: true,
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
        const nextMessage = messages.pop()!;
        nextCursor = nextMessage.id;
      }
      return {
        messages: messages.reverse(),
        nextCursor,
      };
    }),
});
