import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    ownerid: z.literal(true).optional(),
    pfp: z.literal(true).optional(),
    banner: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
  })
  .strict();

export const ServerMaxAggregateInputObjectSchema = Schema;
