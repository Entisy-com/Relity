import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { AdminUserOrderByWithRelationInputObjectSchema } from './AdminUserOrderByWithRelationInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { UserSettingsOrderByWithRelationInputObjectSchema } from './UserSettingsOrderByWithRelationInput.schema';
import { ServerOrderByRelationAggregateInputObjectSchema } from './ServerOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { MemberOrderByRelationAggregateInputObjectSchema } from './MemberOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    banner: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    adminuser: z
      .lazy(() => AdminUserOrderByWithRelationInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    settings: z
      .lazy(() => UserSettingsOrderByWithRelationInputObjectSchema)
      .optional(),
    bannedon: z
      .lazy(() => ServerOrderByRelationAggregateInputObjectSchema)
      .optional(),
    friends: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    friendsWith: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    member: z
      .lazy(() => MemberOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
