import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import { TRPCError } from "@trpc/server";
import { Permission } from "@prisma/client";
import type { Role } from "../../../types";

const ee = new EventEmitter();

export const rolesRouter = router({
  createRole: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        visible: z.boolean(),
        serverId: z.string(),
        color: z.string(),
        permissions: z.array(z.nativeEnum(Permission)),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.findUnique({
        where: {
          id: input.serverId,
        },
        include: {
          roles: true,
        },
      });
      if (!server) throw new TRPCError({ code: "NOT_FOUND" });
      const role = await ctx.prisma.role.create({
        data: {
          name: input.name,
          visible: input.visible,
          color: input.color,
          permissions: input.permissions,
          position: server.roles.length,
          server: {
            connect: {
              id: input.serverId,
            },
          },
        },
      });
      ee.emit("createRole", role);
      return role;
    }),
  onRoleCreate: protectedProcedure.subscription(() => {
    return observable<Role>((emit) => {
      const onCreate = (data: Role) => emit.next(data);
      ee.on("createRole", onCreate);
      return () => {
        ee.off("createRole", onCreate);
      };
    });
  }),
  updateRole: protectedProcedure
    .input(
      z.object({
        roleid: z.string(),
        visible: z.boolean().optional(),
        name: z.string().optional(),
        color: z.string().optional(),
        permissions: z.array(z.nativeEnum(Permission)).optional(),
        position: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const update = await ctx.prisma.role.update({
        where: { id: input.roleid },
        data: {
          color: input.color,
          visible: input.visible,
          name: input.name,
          permissions: input.permissions,
          position: input.position,
        },
      });
      ee.emit("updateRole", update);
      return update;
    }),
  onRoleUpdate: protectedProcedure.subscription(() => {
    return observable<Role>((emit) => {
      const onUpdate = (data: Role) => emit.next(data);
      ee.on("updateRole", onUpdate);
      return () => {
        ee.off("updateRole", onUpdate);
      };
    });
  }),
  deleteRole: protectedProcedure
    .input(z.object({ roleid: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const role = await ctx.prisma.role.findUnique({
        where: { id: input.roleid },
        include: { members: true },
      });
      role?.members.forEach(async (member) => {
        await ctx.prisma.role.update({
          where: { id: input.roleid },
          data: {
            members: {
              disconnect: {
                id: member.id,
              },
            },
          },
        });
      });
      const deletedRole = await ctx.prisma.role.delete({
        where: { id: input.roleid },
      });
      ee.emit("deleteRole", deletedRole);
    }),
  onRoleDelete: protectedProcedure.subscription(() => {
    return observable<Role>((emit) => {
      const onDelete = (data: Role) => emit.next(data);
      ee.on("deleteRole", onDelete);
      return () => {
        ee.off("deleteRole", onDelete);
      };
    });
  }),
  switchRole: protectedProcedure
    .input(
      z.object({
        position: z.number(),
        oldPosition: z.number(),
        serverId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.table(input);
      const updatedRoles = [] as Role[];
      if (input.position < input.oldPosition) {
        //Nach Oben
        console.log("Nach Oben");
        const role = await ctx.prisma.role.findFirst({
          where: {
            position: input.oldPosition,
            serverid: input.serverId,
          },
        });
        const update = await ctx.prisma.role.update({
          where: { id: role?.id },
          data: {
            position: input.position,
          },
          include: {
            members: {
              include: {
                roles: true,
                user: true,
              },
            },
            server: {
              include: {
                members: true,
              },
            },
            mentionedIn: true,
          },
        });
        updatedRoles.push(update);
        for (let i = input.oldPosition; i > input.position; i--) {
          const role = await ctx.prisma.role.findFirst({
            where: {
              position: i - 1,
              serverid: input.serverId,
            },
          });
          const update = await ctx.prisma.role.update({
            where: { id: role?.id },
            data: {
              position: i,
            },
            include: {
              members: {
                include: {
                  roles: true,
                  user: true,
                },
              },
              server: {
                include: {
                  members: true,
                },
              },
              mentionedIn: true,
            },
          });
          updatedRoles.push(update);
        }
      } else if (input.position > input.oldPosition) {
        console.table(input);
        //Nach Unten
        console.log("Nach Unten");
        const role = await ctx.prisma.role.findFirst({
          where: {
            position: input.oldPosition,
            serverid: input.serverId,
          },
        });
        const update = await ctx.prisma.role.update({
          where: { id: role?.id },
          data: {
            position: input.position,
          },
          include: {
            members: {
              include: {
                roles: true,
                user: true,
              },
            },
            server: {
              include: {
                members: true,
              },
            },
            mentionedIn: true,
          },
        });
        updatedRoles.push(update); //+1
        for (let i = input.oldPosition; i < input.position; i++) {
          const role = await ctx.prisma.role.findFirst({
            where: {
              position: i + 1,
              serverid: input.serverId,
            },
          });
          const update = await ctx.prisma.role.update({
            where: { id: role?.id },
            data: {
              position: i,
            },
            include: {
              members: {
                include: {
                  roles: true,
                  user: true,
                },
              },
              server: {
                include: {
                  members: true,
                },
              },
              mentionedIn: true,
            },
          });
          updatedRoles.push(update);
        }
      }
      ee.emit("switchRole", updatedRoles);
      return updatedRoles;
    }),
  onRoleSwitch: protectedProcedure.subscription(() => {
    return observable<Role[]>((emit) => {
      const onSwitch = (data: Role[]) => emit.next(data);
      ee.on("switchRole", onSwitch);
      return () => {
        ee.off("switchRole", onSwitch);
      };
    });
  }),
  getRoles: protectedProcedure
    .input(
      z.object({
        serverId: z.string(),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      const roles = await ctx.prisma.role.findMany({
        take: limit + 1,
        where: { server: { id: input.serverId } },
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { position: "desc" },
        include: {
          members: {
            include: {
              roles: true,
              user: true,
            },
          },
          server: {
            include: {
              members: true,
            },
          },
          mentionedIn: true,
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (roles.length > limit) {
        const nextRole = roles.pop()!;
        nextCursor = nextRole.id;
      }
      return {
        roles: roles.reverse(),
        nextCursor,
      };
    }),
});
