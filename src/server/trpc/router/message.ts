import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import { Message, Prisma } from "@prisma/client";

const defaultMessageSelect = Prisma.validator<Prisma.MessageSelect>()({
  id: true,
  content: true,
  author: true,
  authorId: true,
  color: true,
  backgroundColor: true,
  mentionedRoles: true,
  mentionedUser: true,
  updatedAt: true,
  createdAt: true,
  textChannel: true,
  textChannelId: true,
});

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
  getMessageById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const server = await ctx.prisma.message.findUnique({
        where: {
          id: input.id,
        },
        include: {
          author: true,
          mentionedUser: true,
          mentionedRoles: true,
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
        select: defaultMessageSelect,
        take: limit + 1,
        where: { textChannelId: input.channelId },
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
