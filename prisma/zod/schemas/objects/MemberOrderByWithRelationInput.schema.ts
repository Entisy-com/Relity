import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { RoleOrderByRelationAggregateInputObjectSchema } from './RoleOrderByRelationAggregateInput.schema';
import { ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema';
import { ActionTypeOrderByRelationAggregateInputObjectSchema } from './ActionTypeOrderByRelationAggregateInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema';
import { VoiceChannelOrderByWithRelationInputObjectSchema } from './VoiceChannelOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    pfp: z.lazy(() => SortOrderSchema).optional(),
    banner: z.lazy(() => SortOrderSchema).optional(),
    nickname: z.lazy(() => SortOrderSchema).optional(),
    roles: z
      .lazy(() => RoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    ownerOf: z
      .lazy(() => ServerOrderByWithRelationInputObjectSchema)
      .optional(),
    server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional(),
    actionType: z
      .lazy(() => ActionTypeOrderByRelationAggregateInputObjectSchema)
      .optional(),
    mentionedIn: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    voiceChannel: z
      .lazy(() => VoiceChannelOrderByWithRelationInputObjectSchema)
      .optional(),
    voiceChannelId: z.lazy(() => SortOrderSchema).optional(),
    serverId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MemberOrderByWithRelationInputObjectSchema = Schema;
