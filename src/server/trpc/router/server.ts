import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import type { ActionType, Server } from "../../../types";
import { TRPCError } from "@trpc/server";
import { Action } from "@prisma/client";
import type { Prisma } from "@prisma/client";

const ee = new EventEmitter();

export const serverRouter = router({
  createServer: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.create({
        data: {
          name: input.name,
          owner: {
            create: {
              user: {
                connect: {
                  id: ctx.session.user.id,
                },
              },
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
              visible: false,
              color: "#ffffff",
              permissions: ["READ_MESSAGES", "SEND_MESSAGES"],
            },
          },
        },
        include: {
          owner: true,
        },
      });
      const update = await ctx.prisma.server.update({
        where: { id: server.id },
        data: {
          members: {
            connect: {
              id: server.owner.id,
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
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              member: true,
              settings: true,
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
              mentionedIn: true,
              messages: true,
              ownerOf: true,
              roles: true,
              server: true,
              user: true,
              voiceChannel: true,
            },
          },
          roles: {
            include: {
              members: true,
              mentionedIn: true,
              server: true,
            },
          },
          voicechannel: {
            include: {
              category: true,
              members: true,
              server: true,
            },
          },
          actionLog: {
            include: {
              actions: true,
              server: true,
            },
          },
          members: {
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
        },
      });
      ee.emit("addServer", update);
      return update;
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
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              member: true,
              settings: true,
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
              mentionedIn: true,
              messages: true,
              ownerOf: true,
              roles: true,
              server: true,
              user: true,
              voiceChannel: true,
            },
          },
          roles: {
            include: {
              members: true,
              mentionedIn: true,
              server: true,
            },
          },
          voicechannel: {
            include: {
              category: true,
              members: true,
              server: true,
            },
          },
          actionLog: {
            include: {
              actions: true,
              server: true,
            },
          },
          members: {
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
        },
      });
      if (!server) throw new TRPCError({ code: "NOT_FOUND" });
      // Deletes all Textchannel and Messages
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
      // Deletes all VoiceChannel
      await ctx.prisma.voiceChannel.deleteMany({
        where: {
          serverid: server.id,
        },
      });
      // Deletes all Categories
      await ctx.prisma.category.deleteMany({
        where: {
          serverid: server.id,
        },
      });
      // Deletes all Roles
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
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              member: true,
              settings: true,
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
              mentionedIn: true,
              messages: true,
              ownerOf: true,
              roles: true,
              server: true,
              user: true,
              voiceChannel: true,
            },
          },
          roles: {
            include: {
              members: true,
              mentionedIn: true,
              server: true,
            },
          },
          voicechannel: {
            include: {
              category: true,
              members: true,
              server: true,
            },
          },
          actionLog: {
            include: {
              actions: true,
              server: true,
            },
          },
          members: {
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
              adminuser: true,
              bannedon: true,
              friends: true,
              friendsWith: true,
              member: true,
              settings: true,
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
              mentionedIn: true,
              messages: true,
              ownerOf: true,
              roles: true,
              server: true,
              user: true,
              voiceChannel: true,
            },
          },
          roles: {
            include: {
              members: true,
              mentionedIn: true,
              server: true,
            },
          },
          voicechannel: {
            include: {
              category: true,
              members: true,
              server: true,
            },
          },
          actionLog: {
            include: {
              actions: true,
              server: true,
            },
          },
          members: {
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
        },
        take: limit + 1,
        where: { members: { some: { userId: input.userid } } },
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
  addActionToActionLog: protectedProcedure
    .input(
      z.object({
        serverid: z.string(),
        action: z.nativeEnum(Action),
        memberId: z.string(),
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
          member: {
            connect: {
              id: input.memberId,
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
              member: {
                include: {
                  actionType: true,
                  mentionedIn: true,
                  messages: true,
                  server: true,
                  ownerOf: true,
                  roles: true,
                  user: true,
                  voiceChannel: true,
                },
              },
              actionlog: true,
            },
          },
          server: true,
        },
      });
      return log;
    }),
});
