import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelSumOrderByAggregateInput> = z
  .object({
    position: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TextChannelSumOrderByAggregateInputObjectSchema = Schema;
