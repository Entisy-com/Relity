import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import { defaultRoleInclude, Member } from "../../../types";
import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";

const ee = new EventEmitter();

export const defaultInclude = Prisma.validator<Prisma.MemberInclude>()({
  actionType: true,
  voiceChannel: true,
  mentionedIn: true,
  messages: true,
  ownerOf: true,
  roles: {
    include: defaultRoleInclude,
  },
  server: true,
  user: true,
});

export const memberRouter = router({
  getMemberById: protectedProcedure
    .input(z.object({ memberId: z.string() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.member.findUnique({
        where: { id: input.memberId },
        include: defaultInclude,
      });
      return user;
    }),
  getMemberByUserId: protectedProcedure
    .input(z.object({ userId: z.string(), serverId: z.string() }))
    .query(async ({ ctx, input }) => {
      const member = await ctx.prisma.member.findFirst({
        where: {
          serverId: input.serverId,
          userId: input.userId,
        },
        include: defaultInclude,
      });
      if (!member) throw new TRPCError({ code: "NOT_FOUND" });
      return member;
    }),
  getMembersByServerId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const members = await ctx.prisma.member.findMany({
        where: {
          serverId: input.id,
        },
        include: defaultInclude,
      });
      return members;
    }),
  updateMember: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        roles: z.array(z.string()).optional(),
        nickname: z.string().optional(),
        banner: z.string().optional(),
        pfp: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const memberRoles = await ctx.prisma.member.findUnique({
        where: { id: input.id },
        select: { roles: true },
      });
      for (const role of memberRoles?.roles ?? []) {
        await ctx.prisma.role.update({
          where: { id: role.id },
          data: { members: { disconnect: { id: input.id } } },
        });
      }
      for (const roleId of input.roles ?? []) {
        await ctx.prisma.role.update({
          where: { id: roleId },
          data: { members: { connect: { id: input.id } } },
        });
      }

      const member = await ctx.prisma.member.update({
        where: { id: input.id },
        data: {
          nickname: input.nickname,
          banner: input.banner,
          pfp: input.pfp,
        },
        include: defaultInclude,
      });
      ee.emit("updateMember", member);
      return member;
    }),
  joinServer: protectedProcedure
    .input(
      z.object({ userId: z.string(), serverId: z.string(), roleId: z.string() })
    )
    .mutation(async ({ input, ctx }) => {
      const server = await ctx.prisma.server.findUnique({
        where: { id: input.serverId },
      });
      if (!server) throw new TRPCError({ code: "NOT_FOUND" });
      const everyoneRole = await ctx.prisma.role.findFirst({
        where: { serverid: input.serverId, id: input.roleId },
      });
      if (!everyoneRole) throw new TRPCError({ code: "NOT_FOUND" });
      const member = await ctx.prisma.member.create({
        data: {
          server: {
            connect: {
              id: server.id,
            },
          },
          user: {
            connect: {
              id: input.userId,
            },
          },
          roles: {
            connect: {
              id: everyoneRole.id,
            },
          },
        },
      });

      ee.emit("joinServer", member);
      return member;
    }),
  leaveServer: protectedProcedure
    .input(z.object({ memberId: z.string(), serverId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const member = await ctx.prisma.member.findUnique({
        where: { id: input.memberId },
      });
      if (!member) throw new TRPCError({ code: "NOT_FOUND" });

      const everyoneRole = await ctx.prisma.role.findFirst({
        where: { serverid: input.serverId, name: "everyone" },
      });
      if (!everyoneRole) throw new TRPCError({ code: "NOT_FOUND" });
      const update = await ctx.prisma.member.update({
        where: {
          id: input.memberId,
        },
        data: {
          roles: {
            disconnect: {
              id: everyoneRole.id,
            },
          },
        },
      });
      await ctx.prisma.member.delete({
        where: { id: input.memberId },
      });
      ee.emit("leaveServer", update);
      return update;
    }),
  onJoinServer: protectedProcedure.subscription(() => {
    return observable<Member>((emit) => {
      const onJoin = (data: Member) => emit.next(data);
      ee.on("joinServer", onJoin);
      return () => {
        ee.off("joinServer", onJoin);
      };
    });
  }),
  onLeaveServer: protectedProcedure.subscription(() => {
    return observable<Member>((emit) => {
      const onJoin = (data: Member) => emit.next(data);
      ee.on("leaveServer", onJoin);
      return () => {
        ee.off("leaveServer", onJoin);
      };
    });
  }),
  onUpdateMember: protectedProcedure.subscription(() => {
    return observable<Member>((emit) => {
      const onUpdate = (data: Member) => emit.next(data);
      ee.on("updateMember", onUpdate);
      return () => {
        ee.off("updateMember", onUpdate);
      };
    });
  }),
});
