import { Prisma, VoiceChannel } from "@prisma/client";
import type { TextChannel } from "@prisma/client";
import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";

const ee = new EventEmitter();
const defaultChannelSelect = Prisma.validator<Prisma.VoiceChannelSelect>()({
  id: true,
  name: true,
  createdAt: true,
  updatedAt: true,
  serverid: true,
  category: true,
  position: true,
});
export const voiceChannelRouter = router({
  createChannel: protectedProcedure
    .input(z.object({ name: z.string(), serverid: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const channel = await ctx.prisma.voiceChannel.create({
        data: {
          name: input.name,
          server: {
            connect: {
              id: input.serverid,
            },
          },
        },
      });
      console.warn({ channel });
      ee.emit("addVoiceChannel", channel);
      return channel;
    }),
  onChannelCreate: protectedProcedure.subscription(() => {
    return observable<VoiceChannel>((emit) => {
      const onCreate = (data: VoiceChannel) => emit.next(data);
      ee.on("addVoiceChannel", onCreate);
      return () => {
        ee.off("addVoiceChannel", onCreate);
      };
    });
  }),
  getChannelById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const channel = await ctx.prisma.voiceChannel.findUnique({
        where: {
          id: input.id,
        },
        include: {
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
