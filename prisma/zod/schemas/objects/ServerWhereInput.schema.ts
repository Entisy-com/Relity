import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { CategoryListRelationFilterObjectSchema } from './CategoryListRelationFilter.schema';
import { RoleListRelationFilterObjectSchema } from './RoleListRelationFilter.schema';
import { TextChannelListRelationFilterObjectSchema } from './TextChannelListRelationFilter.schema';
import { VoiceChannelListRelationFilterObjectSchema } from './VoiceChannelListRelationFilter.schema';
import { MemberRelationFilterObjectSchema } from './MemberRelationFilter.schema';
import { MemberWhereInputObjectSchema } from './MemberWhereInput.schema';
import { MemberListRelationFilterObjectSchema } from './MemberListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { ActionLogRelationFilterObjectSchema } from './ActionLogRelationFilter.schema';
import { ActionLogWhereInputObjectSchema } from './ActionLogWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServerWhereInputObjectSchema),
        z.lazy(() => ServerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServerWhereInputObjectSchema),
        z.lazy(() => ServerWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ownerid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pfp: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    banner: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    categories: z.lazy(() => CategoryListRelationFilterObjectSchema).optional(),
    roles: z.lazy(() => RoleListRelationFilterObjectSchema).optional(),
    textchannel: z
      .lazy(() => TextChannelListRelationFilterObjectSchema)
      .optional(),
    voicechannel: z
      .lazy(() => VoiceChannelListRelationFilterObjectSchema)
      .optional(),
    owner: z
      .union([
        z.lazy(() => MemberRelationFilterObjectSchema),
        z.lazy(() => MemberWhereInputObjectSchema),
      ])
      .optional(),
    members: z.lazy(() => MemberListRelationFilterObjectSchema).optional(),
    bannedUser: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    actionLog: z
      .union([
        z.lazy(() => ActionLogRelationFilterObjectSchema),
        z.lazy(() => ActionLogWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ServerWhereInputObjectSchema = Schema;
