import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import EventEmitter from "events";
import { observable } from "@trpc/server/observable";
import { TRPCError } from "@trpc/server";
import type { TextChannel } from "../../../types";

const ee = new EventEmitter();

export const serverSettingsRouter = router({
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
        showBadges: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const serverSettings = await ctx.prisma.serverSettings.findFirst({
        where: {
          serverid: input.serverId,
        },
      });
      const update = await ctx.prisma.serverSettings.update({
        where: { serverid: input.serverId },
        data: {
          logChannelUpdates: input.logChannelUpdates,
          logJoinLeave: input.logJoinLeave,
          logMemberUpdates: input.logMemberUpdates,
          logMessages: input.logMessages,
          logMessageUpdates: input.logMessageUpdates,
          logRoleUpdates: input.logRoleUpdates,
          notifyBan: input.notifyBan,
          notifyUnban: input.notifyUnban,
          notifyKick: input.notifyKick,
          showBadges: input.showBadges,
        },
      });
      return update;
    }),
});
