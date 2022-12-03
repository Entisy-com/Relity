import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import { Server } from "../../../types";
import { userAgent } from "next/server";
import { TRPCError } from "@trpc/server";

const ee = new EventEmitter();

export const serverRouter = router({
  createServer: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.create({
        data: {
          name: input.name,
          owner: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          users: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          textchannel: {
            create: {
              name: "General",
            },
          },
          roles: {
            create: {
              name: "everyone",
              color: "#fff",
              visible: false,
              permissions: ["READ_MESSAGES", "SEND_MESSAGES"],
              users: { connect: { id: ctx.session.user.id } },
            },
          },
        },
      });
      ee.emit("addServer", server);
      return server;
    }),
  updateServer: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        pfp: z.string().optional(),
        banner: z.string().optional(),
        ownerId: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.update({
        where: { id: input.id },
        data: {
          name: input.name,
          pfp: input.pfp,
          banner: input.banner,
          ownerid: input.ownerId,
        },
      });
      ee.emit("updateServer", server);
      return server;
    }),
  deleteServer: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.findUnique({
        where: {
          id: input.id,
        },
        include: {
          textchannel: true,
          voicechannel: true,
          categories: true,
          roles: true,
        },
      });
      if (!server) throw new TRPCError({ code: "NOT_FOUND" });
      (server.textchannel ?? []).forEach(async (channel) => {
        await ctx.prisma.textChannel.delete({
          where: {
            id: channel.id,
          },
        });
      });
      (server.voicechannel ?? []).forEach(async (channel) => {
        await ctx.prisma.voiceChannel.delete({
          where: {
            id: channel.id,
          },
        });
      });
      (server.categories ?? []).forEach(async (category) => {
        await ctx.prisma.category.delete({
          where: {
            id: category.id,
          },
        });
      });
      (server.roles ?? []).forEach(async (role) => {
        await ctx.prisma.role.delete({
          where: {
            id: role.id,
          },
        });
      });
      await ctx.prisma.voiceChannel.deleteMany({
        where: {
          serverid: input.id,
        },
      });
      await ctx.prisma.category.deleteMany({
        where: {
          serverid: input.id,
        },
      });
      await ctx.prisma.role.deleteMany({
        where: {
          serverid: input.id,
        },
      });
      const deleteServer = await ctx.prisma.server.delete({
        where: {
          id: input.id,
        },
      });
      ee.emit("deleteServer", deleteServer);
      return deleteServer;
    }),
  onServerDelete: protectedProcedure.subscription(() => {
    return observable<Server>((emit) => {
      const onDelete = (data: Server) => emit.next(data);
      ee.on("deleteServer", onDelete);
      return () => {
        ee.off("deleteServer", onDelete);
      };
    });
  }),
  onServerUpdate: protectedProcedure.subscription(() => {
    return observable<Server>((emit) => {
      const onDelete = (data: Server) => emit.next(data);
      ee.on("updateServer", onDelete);
      return () => {
        ee.off("updateServer", onDelete);
      };
    });
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
          textchannel: true,
          bannedUser: true,
          categories: true,
          owner: true,
          roles: true,
          users: true,
          voicechannel: true,
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
        include: {
          textchannel: true,
          bannedUser: true,
          categories: true,
          owner: true,
          roles: true,
          users: true,
          voicechannel: true,
          ActionLog: true,
        },
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
        const nextServer = servers.pop()!;
        nextCursor = nextServer.id;
      }
      return {
        servers: servers.reverse(),
        nextCursor,
      };
    }),
});
