import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MessageCountOrderByAggregateInputObjectSchema } from './MessageCountOrderByAggregateInput.schema';
import { MessageMaxOrderByAggregateInputObjectSchema } from './MessageMaxOrderByAggregateInput.schema';
import { MessageMinOrderByAggregateInputObjectSchema } from './MessageMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    color: z.lazy(() => SortOrderSchema).optional(),
    backgroundColor: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    textChannelId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MessageCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => MessageMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MessageMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MessageOrderByWithAggregationInputObjectSchema = Schema;
