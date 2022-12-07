import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MemberOrderByWithRelationInputObjectSchema } from './MemberOrderByWithRelationInput.schema';
import { ActionLogOrderByWithRelationInputObjectSchema } from './ActionLogOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    member: z.lazy(() => MemberOrderByWithRelationInputObjectSchema).optional(),
    memberId: z.lazy(() => SortOrderSchema).optional(),
    action: z.lazy(() => SortOrderSchema).optional(),
    actionlog: z
      .lazy(() => ActionLogOrderByWithRelationInputObjectSchema)
      .optional(),
    actionlogid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ActionTypeOrderByWithRelationInputObjectSchema = Schema;
