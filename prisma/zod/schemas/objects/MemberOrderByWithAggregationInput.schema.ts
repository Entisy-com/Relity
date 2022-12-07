import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MemberCountOrderByAggregateInputObjectSchema } from './MemberCountOrderByAggregateInput.schema';
import { MemberMaxOrderByAggregateInputObjectSchema } from './MemberMaxOrderByAggregateInput.schema';
import { MemberMinOrderByAggregateInputObjectSchema } from './MemberMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    pfp: z.lazy(() => SortOrderSchema).optional(),
    banner: z.lazy(() => SortOrderSchema).optional(),
    nickname: z.lazy(() => SortOrderSchema).optional(),
    voiceChannelId: z.lazy(() => SortOrderSchema).optional(),
    serverId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MemberCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => MemberMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MemberMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MemberOrderByWithAggregationInputObjectSchema = Schema;
