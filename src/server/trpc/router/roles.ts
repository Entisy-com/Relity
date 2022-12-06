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
});
