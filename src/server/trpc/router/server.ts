import { Prisma } from "@prisma/client";
import type { Server } from "@prisma/client";
import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";

const ee = new EventEmitter();
const defaultServerSelect = Prisma.validator<Prisma.ServerSelect>()({
  id: true,
  name: true,
  ownerid: true,
  createdAt: true,
  updatedAt: true,
  pfp: true,
  banner: true,
});

export const serverRouter = router({
  createServer: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const server: Server = await ctx.prisma.server.create({
        data: {
          name: input.name,
          owner: { connect: { id: ctx.session.user.id } },
          users: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
      ee.emit("addServer", server);
      return server;
    }),
  onServerCreate: protectedProcedure.subscription(() => {
    return observable<Server>((emit) => {
      const onCreate = (data: Server) => emit.next(data);
      ee.on("addServer", onCreate);
      return () => {
        ee.off("addServer", onCreate);
      };
    });
  }),
  getServerById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.findUnique({
        where: {
          id: input.id,
        },
        include: {
          users: {
            include: {
              bannedon: true,
              adminuser: true,
              messages: true,
              mentionedin: true,
              server: true,
              ownerof: true,
              roles: true,
            },
          },
          bannedUser: true,
          owner: true,
          roles: {
            include: {
              users: true,
            },
          },
          textchannel: true,
        },
      });
      return server;
    }),
  getServers: protectedProcedure
    .input(
      z.object({
        userid: z.string(),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      const servers = await ctx.prisma.server.findMany({
        select: defaultServerSelect,
        take: limit + 1,
        where: { users: { some: { id: input.userid } } },
        cursor: cursor
          ? {
              id: cursor,
            }
          : undefined,
        orderBy: { createdAt: "desc" },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (servers.length > limit) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const nextServer = servers.pop()!;
        nextCursor = nextServer.id;
      }
      return {
        servers: servers.reverse(),
        nextCursor,
      };
    }),
});
