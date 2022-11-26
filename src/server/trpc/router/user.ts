import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";

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
      const message = ctx.prisma.message.create({
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
      });
      ee.emit("add", message);
      return message;
    }),
});
