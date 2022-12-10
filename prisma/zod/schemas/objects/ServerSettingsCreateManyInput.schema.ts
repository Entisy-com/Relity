import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsCreateManyInput> = z
  .object({
    id: z.string().optional(),
    serverid: z.string(),
    logRoleUpdates: z.boolean(),
    logMemberUpdates: z.boolean(),
    logChannelUpdates: z.boolean(),
    logMessageUpdates: z.boolean(),
    logMessages: z.boolean(),
    logJoinLeave: z.boolean(),
    notifyUnban: z.boolean(),
    notifyBan: z.boolean(),
    notifyKick: z.boolean(),
    showBadges: z.boolean(),
  })
  .strict();

export const ServerSettingsCreateManyInputObjectSchema = Schema;
