import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import { TRPCError } from "@trpc/server";
import { Permission } from "@prisma/client";

const ee = new EventEmitter();
export const userRouter = router({
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
      const role = await ctx.prisma.role.create({
        data: {
          name: input.name,
          visible: input.visible,
          color: input.color,
          permissions: input.permissions,
          server: {
            connect: {
              id: input.serverId,
            },
          },
        },
      });
      return role;
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
      return update;
    }),
  deleteRole: protectedProcedure
    .input(z.object({ roleid: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const role = await ctx.prisma.role.findUnique({
        where: { id: input.roleid },
        include: { users: true },
      });
      role?.users.forEach(async (user) => {
        await ctx.prisma.role.update({
          where: { id: input.roleid },
          data: {
            users: {
              disconnect: {
                id: user.id,
              },
            },
          },
        });
      });
      const deletedRole = await ctx.prisma.role.delete({
        where: { id: input.roleid },
      });
    }),
});
