import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    serverid: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    categoryid: z.literal(true).optional(),
    position: z.literal(true).optional(),
  })
  .strict();

export const TextChannelMinAggregateInputObjectSchema = Schema;
