import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import { TRPCError } from "@trpc/server";
import type { TextChannel } from "../../../types";

const ee = new EventEmitter();

export const textChannelRouter = router({
  createChannel: protectedProcedure
    .input(z.object({ name: z.string(), serverid: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const channel = await ctx.prisma.textChannel.create({
        data: {
          name: input.name,
          server: {
            connect: {
              id: input.serverid,
            },
          },
        },
      });
      ee.emit("addChannel", channel);
      return channel;
    }),
  deleteChannel: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const channel = await ctx.prisma.textChannel.findUnique({
        where: { id: input.id },
        include: {
          messages: true,
        },
      });
      if (!channel) throw new TRPCError({ code: "NOT_FOUND" });
      (channel.messages ?? []).forEach(async (message) => {
        await ctx.prisma.message.delete({
          where: {
            id: message.id,
          },
        });
      });
      const deleteChannel = await ctx.prisma.textChannel.delete({
        where: {
          id: input.id,
        },
      });
      ee.emit("deleteChannel", deleteChannel);
      return deleteChannel;
    }),
  getChannelById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const channel = await ctx.prisma.textChannel.findUnique({
        where: {
          id: input.id,
        },
        include: {
          messages: true,
          server: true,
          category: true,
        },
      });
      return channel;
    }),
  getChannels: protectedProcedure
    .input(
      z.object({
        serverid: z.string(),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      const channel = await ctx.prisma.textChannel.findMany({
        take: limit + 1,
        where: { serverid: input.serverid },
        include: {
          category: true,
          messages: true,
          server: true,
        },
        cursor: cursor
          ? {
              id: cursor,
            }
          : undefined,
        orderBy: { createdAt: "desc" },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (channel.length > limit) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const nextChannel = channel.pop()!;
        nextCursor = nextChannel.id;
      }
      return {
        channel: channel.reverse(),
        nextCursor,
      };
    }),
  onChannelCreate: protectedProcedure.subscription(() => {
    return observable<TextChannel>((emit) => {
      const onCreate = (data: TextChannel) => emit.next(data);
      ee.on("addChannel", onCreate);
      return () => {
        ee.off("addChannel", onCreate);
      };
    });
  }),
  onChannelDelete: protectedProcedure.subscription(() => {
    return observable<TextChannel>((emit) => {
      const onDelete = (data: TextChannel) => emit.next(data);
      ee.on("deleteChannel", onDelete);
      return () => {
        ee.off("deleteChannel", onDelete);
      };
    });
  }),
});
