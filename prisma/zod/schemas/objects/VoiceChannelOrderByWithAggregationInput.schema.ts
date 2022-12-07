import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VoiceChannelCountOrderByAggregateInputObjectSchema } from './VoiceChannelCountOrderByAggregateInput.schema';
import { VoiceChannelAvgOrderByAggregateInputObjectSchema } from './VoiceChannelAvgOrderByAggregateInput.schema';
import { VoiceChannelMaxOrderByAggregateInputObjectSchema } from './VoiceChannelMaxOrderByAggregateInput.schema';
import { VoiceChannelMinOrderByAggregateInputObjectSchema } from './VoiceChannelMinOrderByAggregateInput.schema';
import { VoiceChannelSumOrderByAggregateInputObjectSchema } from './VoiceChannelSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelOrderByWithAggregationInput> = z
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
      .lazy(() => VoiceChannelCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => VoiceChannelAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => VoiceChannelMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => VoiceChannelMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => VoiceChannelSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const VoiceChannelOrderByWithAggregationInputObjectSchema = Schema;
