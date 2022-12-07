import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AdminUserCountOrderByAggregateInputObjectSchema } from './AdminUserCountOrderByAggregateInput.schema';
import { AdminUserMaxOrderByAggregateInputObjectSchema } from './AdminUserMaxOrderByAggregateInput.schema';
import { AdminUserMinOrderByAggregateInputObjectSchema } from './AdminUserMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AdminUserOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AdminUserCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AdminUserMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AdminUserMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AdminUserOrderByWithAggregationInputObjectSchema = Schema;
