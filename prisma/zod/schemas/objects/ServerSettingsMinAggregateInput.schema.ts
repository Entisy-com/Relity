import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    serverid: z.literal(true).optional(),
    logRoleUpdates: z.literal(true).optional(),
    logMemberUpdates: z.literal(true).optional(),
    logChannelUpdates: z.literal(true).optional(),
    logMessageUpdates: z.literal(true).optional(),
    logMessages: z.literal(true).optional(),
    logJoinLeave: z.literal(true).optional(),
    notifyUnban: z.literal(true).optional(),
    notifyBan: z.literal(true).optional(),
    notifyKick: z.literal(true).optional(),
    showBadges: z.literal(true).optional(),
  })
  .strict();

export const ServerSettingsMinAggregateInputObjectSchema = Schema;
