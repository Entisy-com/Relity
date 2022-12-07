import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPermissionNullableListFilterObjectSchema } from './EnumPermissionNullableListFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ServerRelationFilterObjectSchema } from './ServerRelationFilter.schema';
import { ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema';
import { MemberListRelationFilterObjectSchema } from './MemberListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    permissions: z
      .lazy(() => EnumPermissionNullableListFilterObjectSchema)
      .optional(),
    serverid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    visible: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    color: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    position: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    server: z
      .union([
        z.lazy(() => ServerRelationFilterObjectSchema),
        z.lazy(() => ServerWhereInputObjectSchema),
      ])
      .optional(),
    mentionedIn: z.lazy(() => MessageListRelationFilterObjectSchema).optional(),
    members: z.lazy(() => MemberListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const RoleWhereInputObjectSchema = Schema;
