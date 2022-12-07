import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema';
import { ActionTypeOrderByRelationAggregateInputObjectSchema } from './ActionTypeOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional(),
    serverId: z.lazy(() => SortOrderSchema).optional(),
    actions: z
      .lazy(() => ActionTypeOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ActionLogOrderByWithRelationInputObjectSchema = Schema;
