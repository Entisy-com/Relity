import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelSumAggregateInputType> = z
  .object({
    position: z.literal(true).optional(),
  })
  .strict();

export const TextChannelSumAggregateInputObjectSchema = Schema;
