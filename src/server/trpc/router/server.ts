import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import { ActionType, Server } from "../../../types";
import { userAgent } from "next/server";
import { TRPCError } from "@trpc/server";
import { Action, Prisma } from "@prisma/client";

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
          voicechannel: {
            create: {
              name: "General",
            },
          },
          roles: {
            create: {
              name: "everyone",
              color: "#ffffff",
              visible: false,
              permissions: ["READ_MESSAGES", "SEND_MESSAGES"],
              users: { connect: { id: ctx.session.user.id } },
            },
          },
        },
        include: {
          textchannel: {
            include: {
              category: true,
              messages: true,
              server: true,
            },
          },
          bannedUser: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          categories: {
            include: {
              server: true,
              textchannels: true,
              voicechannels: true,
            },
          },
          owner: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          roles: {
            include: {
              mentionedIn: true,
              users: true,
              server: true,
            },
          },
          users: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          voicechannel: {
            include: {
              category: true,
              server: true,
              users: true,
            },
          },
          actionLog: {
            include: {
              actions: true,
              server: true,
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
          textchannel: {
            include: {
              category: true,
              messages: true,
              server: true,
            },
          },
          bannedUser: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          categories: {
            include: {
              server: true,
              textchannels: true,
              voicechannels: true,
            },
          },
          owner: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          roles: {
            include: {
              mentionedIn: true,
              users: true,
              server: true,
            },
          },
          users: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          voicechannel: {
            include: {
              category: true,
              server: true,
              users: true,
            },
          },
          actionLog: {
            include: {
              actions: true,
              server: true,
            },
          },
        },
      });
      if (!server) throw new TRPCError({ code: "NOT_FOUND" });
      (server.textchannel ?? []).forEach(async (channel) => {
        await ctx.prisma.message.deleteMany({
          where: {
            textChannelId: channel.id,
          },
        });
        await ctx.prisma.textChannel.delete({
          where: {
            id: channel.id,
          },
        });
      });
      await ctx.prisma.voiceChannel.deleteMany({
        where: {
          serverid: server.id,
        },
      });
      await ctx.prisma.category.deleteMany({
        where: {
          serverid: server.id,
        },
      });
      await ctx.prisma.role.deleteMany({
        where: {
          serverid: server.id,
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
          textchannel: {
            include: {
              category: true,
              messages: true,
              server: true,
            },
          },
          bannedUser: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          categories: {
            include: {
              server: true,
              textchannels: true,
              voicechannels: true,
            },
          },
          owner: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          roles: {
            include: {
              mentionedIn: true,
              users: true,
              server: true,
            },
          },
          users: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          voicechannel: {
            include: {
              category: true,
              server: true,
              users: true,
            },
          },
          actionLog: {
            include: {
              actions: true,
              server: true,
            },
          },
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
          textchannel: {
            include: {
              category: true,
              messages: true,
              server: true,
            },
          },
          bannedUser: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          categories: {
            include: {
              server: true,
              textchannels: true,
              voicechannels: true,
            },
          },
          owner: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          roles: {
            include: {
              mentionedIn: true,
              users: true,
              server: true,
            },
          },
          users: {
            include: {
              actionType: true,
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              mentionedin: true,
              messages: true,
              ownerof: true,
              roles: true,
              server: true,
              settings: true,
              voicechannel: true,
            },
          },
          voicechannel: {
            include: {
              category: true,
              server: true,
              users: true,
            },
          },
          actionLog: {
            include: {
              actions: true,
              server: true,
            },
          },
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
  addActionToActionLog: protectedProcedure
    .input(
      z.object({
        serverid: z.string(),
        action: z.nativeEnum(Action),
        userid: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const update = await ctx.prisma.actionType.create({
        data: {
          action: input.action,
          actionlog: {
            connectOrCreate: {
              where: {
                serverId: input.serverid,
              },
              create: {
                server: {
                  connect: {
                    id: input.serverid,
                  },
                },
              },
            },
          },
          user: {
            connect: {
              id: input.userid,
            },
          },
        },
      });
      ee.emit("updatedLog", update);
      return update;
    }),
  onAddActionToActionLog: protectedProcedure.subscription(() => {
    return observable<ActionType>((emit) => {
      const onCreate = (data: ActionType) => emit.next(data);
      ee.on("updatedLog", onCreate);
      return () => {
        ee.off("updatedLog", onCreate);
      };
    });
  }),
  getActionLogFromServer: protectedProcedure
    .input(z.object({ serverId: z.string() }))
    .query(async ({ input, ctx }) => {
      const log = await ctx.prisma.actionLog.findFirst({
        where: {
          serverId: input.serverId,
        },
        include: {
          actions: {
            include: {
              user: true,
            },
          },
          server: true,
        },
      });
      return log;
    }),
});
