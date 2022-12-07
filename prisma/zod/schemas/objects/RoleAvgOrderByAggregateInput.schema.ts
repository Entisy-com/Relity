import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleAvgOrderByAggregateInput> = z
  .object({
    position: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RoleAvgOrderByAggregateInputObjectSchema = Schema;
