import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { randexp } from "randexp";
import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

const defaultInclude = Prisma.validator<Prisma.InviteInclude>()({
  server: true,
});

function iid() {
  return randexp(/[A-Za-z0-9]{15}/i);
}

export const inviteRouter = router({
  createInvite: protectedProcedure
    .input(z.object({ serverid: z.string(), uses: z.number().optional() }))
    .mutation(async ({ ctx, input }) => {
      const invite = await ctx.prisma.invite.create({
        data: {
          id: iid(),
          server: {
            connect: {
              id: input.serverid,
            },
          },
          uses: input.uses,
        },
        include: defaultInclude,
      });
      return invite;
    }),
  getInviteById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const invite = await ctx.prisma.invite.findUnique({
        where: {
          id: input.id,
        },
        include: defaultInclude,
      });
      return invite;
    }),
  getInvitesByServerId: protectedProcedure
    .input(z.object({ serverid: z.string() }))
    .query(async ({ ctx, input }) => {
      const invites = await ctx.prisma.invite.findMany({
        where: {
          serverId: input.serverid,
        },
        include: defaultInclude,
      });
      return invites;
    }),
  getInvites: protectedProcedure.query(async ({ ctx }) => {
    const invites = await ctx.prisma.invite.findMany({
      include: defaultInclude,
    });
    return invites;
  }),
  useInvite: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const invite = await ctx.prisma.invite.findUnique({
        where: {
          id: input.id,
        },
        include: defaultInclude,
      });
      if (!invite) throw new TRPCError({ code: "NOT_FOUND" });
      if (invite.uses === -1) return invite;
      if (invite.uses > 1) {
        //update
        const update = await ctx.prisma.invite.update({
          where: {
            id: input.id,
          },
          data: {
            uses: invite.uses - 1,
          },
          include: defaultInclude,
        });
        return update;
      }
      //delete
      await ctx.prisma.invite.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
