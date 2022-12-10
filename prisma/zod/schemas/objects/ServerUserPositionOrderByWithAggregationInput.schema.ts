import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServerUserPositionCountOrderByAggregateInputObjectSchema } from './ServerUserPositionCountOrderByAggregateInput.schema';
import { ServerUserPositionAvgOrderByAggregateInputObjectSchema } from './ServerUserPositionAvgOrderByAggregateInput.schema';
import { ServerUserPositionMaxOrderByAggregateInputObjectSchema } from './ServerUserPositionMaxOrderByAggregateInput.schema';
import { ServerUserPositionMinOrderByAggregateInputObjectSchema } from './ServerUserPositionMinOrderByAggregateInput.schema';
import { ServerUserPositionSumOrderByAggregateInputObjectSchema } from './ServerUserPositionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      serverId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      position: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => ServerUserPositionCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => ServerUserPositionAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => ServerUserPositionMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => ServerUserPositionMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => ServerUserPositionSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const ServerUserPositionOrderByWithAggregationInputObjectSchema = Schema;
