import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    memberId: z.lazy(() => SortOrderSchema).optional(),
    action: z.lazy(() => SortOrderSchema).optional(),
    actionlogid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ActionTypeMaxOrderByAggregateInputObjectSchema = Schema;
