import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TextChannelCountOrderByAggregateInputObjectSchema } from './TextChannelCountOrderByAggregateInput.schema';
import { TextChannelAvgOrderByAggregateInputObjectSchema } from './TextChannelAvgOrderByAggregateInput.schema';
import { TextChannelMaxOrderByAggregateInputObjectSchema } from './TextChannelMaxOrderByAggregateInput.schema';
import { TextChannelMinOrderByAggregateInputObjectSchema } from './TextChannelMinOrderByAggregateInput.schema';
import { TextChannelSumOrderByAggregateInputObjectSchema } from './TextChannelSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    serverid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    categoryid: z.lazy(() => SortOrderSchema).optional(),
    permissions: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TextChannelCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TextChannelAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TextChannelMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TextChannelMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TextChannelSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TextChannelOrderByWithAggregationInputObjectSchema = Schema;
