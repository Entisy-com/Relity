import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema';
import { CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    serverid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    categoryid: z.lazy(() => SortOrderSchema).optional(),
    permissions: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    messages: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const TextChannelOrderByWithRelationInputObjectSchema = Schema;
