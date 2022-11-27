import { Prisma } from "@prisma/client";
import type { TextChannel } from "@prisma/client";
import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";

const ee = new EventEmitter();
const defaultChannelSelect = Prisma.validator<Prisma.TextChannelSelect>()({
  id: true,
  name: true,
  createdAt: true,
  updatedAt: true,
  serverid: true,
});
export const channelRouter = router({
  createChannel: protectedProcedure
    .input(z.object({ name: z.string(), serverid: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const channel = ctx.prisma.textChannel.create({
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
  onChannelCreate: protectedProcedure.subscription(() => {
    return observable<TextChannel>((emit) => {
      const onCreate = (data: TextChannel) => emit.next(data);
      ee.on("addChannel", onCreate);
      return () => {
        ee.off("addChannel", onCreate);
      };
    });
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
        select: defaultChannelSelect,
        take: limit + 1,
        where: { serverid: input.serverid },
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
});
