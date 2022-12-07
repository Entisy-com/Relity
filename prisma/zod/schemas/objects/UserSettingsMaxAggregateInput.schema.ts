import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userid: z.literal(true).optional(),
  })
  .strict();

export const UserSettingsMaxAggregateInputObjectSchema = Schema;
