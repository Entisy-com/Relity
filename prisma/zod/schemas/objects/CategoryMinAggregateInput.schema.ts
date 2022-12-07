import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    serverid: z.literal(true).optional(),
    position: z.literal(true).optional(),
  })
  .strict();

export const CategoryMinAggregateInputObjectSchema = Schema;