import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ActionTypeCountOrderByAggregateInputObjectSchema } from './ActionTypeCountOrderByAggregateInput.schema';
import { ActionTypeMaxOrderByAggregateInputObjectSchema } from './ActionTypeMaxOrderByAggregateInput.schema';
import { ActionTypeMinOrderByAggregateInputObjectSchema } from './ActionTypeMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    memberId: z.lazy(() => SortOrderSchema).optional(),
    action: z.lazy(() => SortOrderSchema).optional(),
    actionlogid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ActionTypeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ActionTypeMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ActionTypeMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ActionTypeOrderByWithAggregationInputObjectSchema = Schema;
