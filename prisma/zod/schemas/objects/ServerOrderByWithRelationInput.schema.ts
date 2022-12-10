import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CategoryOrderByRelationAggregateInputObjectSchema } from './CategoryOrderByRelationAggregateInput.schema';
import { RoleOrderByRelationAggregateInputObjectSchema } from './RoleOrderByRelationAggregateInput.schema';
import { TextChannelOrderByRelationAggregateInputObjectSchema } from './TextChannelOrderByRelationAggregateInput.schema';
import { VoiceChannelOrderByRelationAggregateInputObjectSchema } from './VoiceChannelOrderByRelationAggregateInput.schema';
import { MemberOrderByWithRelationInputObjectSchema } from './MemberOrderByWithRelationInput.schema';
import { MemberOrderByRelationAggregateInputObjectSchema } from './MemberOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { ActionLogOrderByWithRelationInputObjectSchema } from './ActionLogOrderByWithRelationInput.schema';
import { ServerUserPositionOrderByRelationAggregateInputObjectSchema } from './ServerUserPositionOrderByRelationAggregateInput.schema';
import { ServerSettingsOrderByWithRelationInputObjectSchema } from './ServerSettingsOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    ownerid: z.lazy(() => SortOrderSchema).optional(),
    pfp: z.lazy(() => SortOrderSchema).optional(),
    banner: z.lazy(() => SortOrderSchema).optional(),
    categories: z
      .lazy(() => CategoryOrderByRelationAggregateInputObjectSchema)
      .optional(),
    roles: z
      .lazy(() => RoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    textchannel: z
      .lazy(() => TextChannelOrderByRelationAggregateInputObjectSchema)
      .optional(),
    voicechannel: z
      .lazy(() => VoiceChannelOrderByRelationAggregateInputObjectSchema)
      .optional(),
    owner: z.lazy(() => MemberOrderByWithRelationInputObjectSchema).optional(),
    members: z
      .lazy(() => MemberOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bannedUser: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    actionLog: z
      .lazy(() => ActionLogOrderByWithRelationInputObjectSchema)
      .optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    serverUserPosition: z
      .lazy(() => ServerUserPositionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    settings: z
      .lazy(() => ServerSettingsOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ServerOrderByWithRelationInputObjectSchema = Schema;
