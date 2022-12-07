import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema';
import { MemberOrderByRelationAggregateInputObjectSchema } from './MemberOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    permissions: z.lazy(() => SortOrderSchema).optional(),
    serverid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    visible: z.lazy(() => SortOrderSchema).optional(),
    color: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional(),
    mentionedIn: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    members: z
      .lazy(() => MemberOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleOrderByWithRelationInputObjectSchema = Schema;
