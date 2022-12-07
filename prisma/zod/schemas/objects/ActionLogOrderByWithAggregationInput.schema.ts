import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ActionLogCountOrderByAggregateInputObjectSchema } from './ActionLogCountOrderByAggregateInput.schema';
import { ActionLogMaxOrderByAggregateInputObjectSchema } from './ActionLogMaxOrderByAggregateInput.schema';
import { ActionLogMinOrderByAggregateInputObjectSchema } from './ActionLogMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    serverId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ActionLogCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ActionLogMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ActionLogMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ActionLogOrderByWithAggregationInputObjectSchema = Schema;
