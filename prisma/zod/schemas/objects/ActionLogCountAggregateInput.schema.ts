import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    serverId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ActionLogCountAggregateInputObjectSchema = Schema;
