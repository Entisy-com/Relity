import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { RoleListRelationFilterObjectSchema } from './RoleListRelationFilter.schema';
import { ServerRelationFilterObjectSchema } from './ServerRelationFilter.schema';
import { ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ActionTypeListRelationFilterObjectSchema } from './ActionTypeListRelationFilter.schema';
import { MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema';
import { VoiceChannelRelationFilterObjectSchema } from './VoiceChannelRelationFilter.schema';
import { VoiceChannelWhereInputObjectSchema } from './VoiceChannelWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MemberWhereInputObjectSchema),
        z.lazy(() => MemberWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MemberWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MemberWhereInputObjectSchema),
        z.lazy(() => MemberWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pfp: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    banner: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    nickname: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    roles: z.lazy(() => RoleListRelationFilterObjectSchema).optional(),
    ownerOf: z
      .union([
        z.lazy(() => ServerRelationFilterObjectSchema),
        z.lazy(() => ServerWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    server: z
      .union([
        z.lazy(() => ServerRelationFilterObjectSchema),
        z.lazy(() => ServerWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    actionType: z
      .lazy(() => ActionTypeListRelationFilterObjectSchema)
      .optional(),
    mentionedIn: z.lazy(() => MessageListRelationFilterObjectSchema).optional(),
    messages: z.lazy(() => MessageListRelationFilterObjectSchema).optional(),
    voiceChannel: z
      .union([
        z.lazy(() => VoiceChannelRelationFilterObjectSchema),
        z.lazy(() => VoiceChannelWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    voiceChannelId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    serverId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const MemberWhereInputObjectSchema = Schema;
