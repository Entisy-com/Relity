import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import type { ActionType, Server, User } from "../../../types";
import { TRPCError } from "@trpc/server";
import { Action, Prisma } from "@prisma/client";

const ee = new EventEmitter();

export const defaultInclude = Prisma.validator<Prisma.ServerInclude>()({
  settings: true,
  textchannel: true,
  bannedUser: true,
  categories: true,
  owner: true,
  roles: {
    include: {
      members: true,
    },
  },
  voicechannel: {
    include: {
      category: true,
      members: {
        include: {
          user: true,
        },
      },
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
      user: true,
      actionType: true,
      mentionedIn: true,
      messages: true,
      ownerOf: true,
      roles: true,
      server: true,
      voiceChannel: true,
    },
  },
  serverUserPosition: true,
  invites: true,
});

export const serverRouter = router({
  createServer: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.create({
        data: {
          everyoneRole: "",
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
          serverUserPosition: {
            create: {
              user: {
                connect: {
                  id: ctx.session.user.id,
                },
              },
            },
          },
          settings: {
            create: {
              logChannelUpdates: true,
              logJoinLeave: false,
              logMemberUpdates: true,
              logMessages: false,
              logMessageUpdates: true,
              logRoleUpdates: true,
              notifyBan: true,
              notifyKick: true,
              notifyUnban: true,
              displayBadges: true,
              displayRoleColors: true,
              displayOfflineMembers: true,
            },
          },
        },
        include: {
          owner: {
            include: {
              user: true,
            },
          },
          roles: true,
        },
      });
      const everyoneRole = await ctx.prisma.role.findFirst({
        where: {
          serverid: server.id,
          name: "everyone",
        },
      });
      await ctx.prisma.member.update({
        where: {
          id: server.owner.id,
        },
        data: {
          roles: {
            connect: {
              id: everyoneRole!.id,
            },
          },
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
          everyoneRole: everyoneRole?.id,
        },
        include: {
          textchannel: true,
          bannedUser: true,
          categories: true,
          owner: true,
          roles: true,
          voicechannel: true,
          actionLog: true,
          members: true,
          settings: true,
          serverUserPosition: true,
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
          textchannel: true,
          bannedUser: true,
          categories: true,
          owner: true,
          roles: true,
          voicechannel: true,
          actionLog: true,
          members: true,
          settings: true,
          serverUserPosition: true,
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
      //Delete ServerSettings
      await ctx.prisma.serverSettings.delete({
        where: {
          serverId: server.id,
        },
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
      const serverUserPosition = await ctx.prisma.serverUserPosition.findFirst({
        where: {
          serverId: server.id,
        },
      });
      await ctx.prisma.serverUserPosition.delete({
        where: {
          id: serverUserPosition?.id,
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
  getServerById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.findUnique({
        where: {
          id: input.id,
        },
        include: defaultInclude,
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
        include: defaultInclude,
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
  getServersByUserId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const servers = await ctx.prisma.server.findMany({
        where: {
          members: {
            some: {
              userId: input.id,
            },
          },
        },
        include: defaultInclude,
      });
      return servers;
    }),
  switchServer: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        position: z.number(),
        oldPosition: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const server = await ctx.prisma.server.findFirst({
        where: {
          serverUserPosition: {
            some: {
              userId: input.userId,
              position: input.position,
            },
          },
        },
      });
      if (!server) throw new TRPCError({ code: "NOT_FOUND" });
      const serverUserPosition = await ctx.prisma.serverUserPosition.findFirst({
        where: {
          userId: input.userId,
          serverId: server.id,
        },
      });
      if (!serverUserPosition) throw new TRPCError({ code: "NOT_FOUND" });
      const update = await ctx.prisma.server.update({
        where: { id: server?.id },
        data: {
          serverUserPosition: {
            update: {
              where: {
                id: serverUserPosition.id,
              },
              data: {
                position: input.oldPosition,
              },
            },
          },
        },
      });
      ee.emit("updateSettings", update);
    }),
  banUserFromServer: protectedProcedure
    .input(
      z.object({
        memberId: z.string(),
        userId: z.string(),
        serverId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.server.update({
        where: { id: input.serverId },
        data: {
          bannedUser: {
            connect: {
              id: input.userId,
            },
          },
          members: {
            disconnect: {
              id: input.memberId,
            },
          },
        },
      });
      const update = await ctx.prisma.user.findUnique({
        where: { id: input.userId },
      });
      ee.emit("bannedUser", update);
    }),
  pardonUserFromServer: protectedProcedure
    .input(z.object({ userId: z.string(), serverId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.server.update({
        where: { id: input.serverId },
        data: {
          bannedUser: {
            disconnect: {
              id: input.userId,
            },
          },
        },
      });
      const update = await ctx.prisma.user.findUnique({
        where: { id: input.userId },
      });
      ee.emit("unbannedUser", update);
    }),
  updateSetting: protectedProcedure
    .input(
      z.object({
        serverId: z.string(),
        logChannelUpdates: z.boolean().optional(),
        logJoinLeave: z.boolean().optional(),
        logMemberUpdates: z.boolean().optional(),
        logMessages: z.boolean().optional(),
        logMessageUpdates: z.boolean().optional(),
        logRoleUpdates: z.boolean().optional(),
        notifyBan: z.boolean().optional(),
        notifyUnban: z.boolean().optional(),
        notifyKick: z.boolean().optional(),
        displayBadges: z.boolean().optional(),
        displayRoleColors: z.boolean().optional(),
        displayOfflineMembers: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const update = await ctx.prisma.server.update({
        where: { id: input.serverId },
        data: {
          settings: {
            update: {
              logChannelUpdates: input.logChannelUpdates,
              logJoinLeave: input.logJoinLeave,
              logMemberUpdates: input.logMemberUpdates,
              logMessages: input.logMessages,
              logMessageUpdates: input.logMessageUpdates,
              logRoleUpdates: input.logRoleUpdates,
              notifyBan: input.notifyBan,
              notifyUnban: input.notifyUnban,
              notifyKick: input.notifyKick,
              displayBadges: input.displayBadges,
              displayRoleColors: input.displayRoleColors,
              displayOfflineMembers: input.displayOfflineMembers,
            },
          },
        },
      });
      return update;
    }),
  getBannedUsers: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const users = await ctx.prisma.user.findMany({
        where: {
          bannedon: {
            some: {
              id: input.id,
            },
          },
        },
        include: defaultInclude,
      });
      return users;
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
  onSwitchServer: protectedProcedure.subscription(() => {
    return observable<Server[]>((emit) => {
      const onCreate = (data: Server[]) => emit.next(data);
      ee.on("updateSettings", onCreate);
      return () => {
        ee.off("updateSettings", onCreate);
      };
    });
  }),
  onBanUser: protectedProcedure.subscription(() => {
    return observable<User>((emit) => {
      const onCreate = (data: User) => emit.next(data);
      ee.on("bannedUser", onCreate);
      return () => {
        ee.off("bannedUser", onCreate);
      };
    });
  }),
  onUnbanUser: protectedProcedure.subscription(() => {
    return observable<User>((emit) => {
      const onCreate = (data: User) => emit.next(data);
      ee.on("unbannedUser", onCreate);
      return () => {
        ee.off("unbannedUser", onCreate);
      };
    });
  }),
});
