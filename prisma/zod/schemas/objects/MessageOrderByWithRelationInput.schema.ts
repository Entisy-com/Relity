import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MemberOrderByWithRelationInputObjectSchema } from './MemberOrderByWithRelationInput.schema';
import { TextChannelOrderByWithRelationInputObjectSchema } from './TextChannelOrderByWithRelationInput.schema';
import { RoleOrderByRelationAggregateInputObjectSchema } from './RoleOrderByRelationAggregateInput.schema';
import { MemberOrderByRelationAggregateInputObjectSchema } from './MemberOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    color: z.lazy(() => SortOrderSchema).optional(),
    backgroundColor: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    textChannelId: z.lazy(() => SortOrderSchema).optional(),
    author: z.lazy(() => MemberOrderByWithRelationInputObjectSchema).optional(),
    textChannel: z
      .lazy(() => TextChannelOrderByWithRelationInputObjectSchema)
      .optional(),
    mentionedRoles: z
      .lazy(() => RoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    mentionedMembers: z
      .lazy(() => MemberOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MessageOrderByWithRelationInputObjectSchema = Schema;
