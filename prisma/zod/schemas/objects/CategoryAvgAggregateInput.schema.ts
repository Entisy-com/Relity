import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryAvgAggregateInputType> = z
  .object({
    position: z.literal(true).optional(),
  })
  .strict();

export const CategoryAvgAggregateInputObjectSchema = Schema;
