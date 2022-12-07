import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    memberId: z.literal(true).optional(),
    action: z.literal(true).optional(),
    actionlogid: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ActionTypeCountAggregateInputObjectSchema = Schema;
