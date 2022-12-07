import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServerCountOrderByAggregateInputObjectSchema } from './ServerCountOrderByAggregateInput.schema';
import { ServerMaxOrderByAggregateInputObjectSchema } from './ServerMaxOrderByAggregateInput.schema';
import { ServerMinOrderByAggregateInputObjectSchema } from './ServerMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    ownerid: z.lazy(() => SortOrderSchema).optional(),
    pfp: z.lazy(() => SortOrderSchema).optional(),
    banner: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ServerCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ServerMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ServerMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ServerOrderByWithAggregationInputObjectSchema = Schema;
