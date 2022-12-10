import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumOnlineStatusFilterObjectSchema } from './EnumOnlineStatusFilter.schema';
import { OnlineStatusSchema } from '../enums/OnlineStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { AdminUserRelationFilterObjectSchema } from './AdminUserRelationFilter.schema';
import { AdminUserWhereInputObjectSchema } from './AdminUserWhereInput.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { UserSettingsRelationFilterObjectSchema } from './UserSettingsRelationFilter.schema';
import { UserSettingsWhereInputObjectSchema } from './UserSettingsWhereInput.schema';
import { ServerListRelationFilterObjectSchema } from './ServerListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { MemberListRelationFilterObjectSchema } from './MemberListRelationFilter.schema';
import { ServerUserPositionListRelationFilterObjectSchema } from './ServerUserPositionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    banner: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    status: z
      .union([
        z.lazy(() => EnumOnlineStatusFilterObjectSchema),
        z.lazy(() => OnlineStatusSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    adminuser: z
      .union([
        z.lazy(() => AdminUserRelationFilterObjectSchema),
        z.lazy(() => AdminUserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    settings: z
      .union([
        z.lazy(() => UserSettingsRelationFilterObjectSchema),
        z.lazy(() => UserSettingsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    bannedon: z.lazy(() => ServerListRelationFilterObjectSchema).optional(),
    friends: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    friendsWith: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    member: z.lazy(() => MemberListRelationFilterObjectSchema).optional(),
    serverUserPosition: z
      .lazy(() => ServerUserPositionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
