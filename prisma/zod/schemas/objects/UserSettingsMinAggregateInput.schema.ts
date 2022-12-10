import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userid: z.literal(true).optional(),
    notifyUnban: z.literal(true).optional(),
    notifyBan: z.literal(true).optional(),
    notifyKick: z.literal(true).optional(),
  })
  .strict();

export const UserSettingsMinAggregateInputObjectSchema = Schema;
