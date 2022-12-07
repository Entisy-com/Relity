import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MemberRelationFilterObjectSchema } from './MemberRelationFilter.schema';
import { MemberWhereInputObjectSchema } from './MemberWhereInput.schema';
import { TextChannelRelationFilterObjectSchema } from './TextChannelRelationFilter.schema';
import { TextChannelWhereInputObjectSchema } from './TextChannelWhereInput.schema';
import { RoleListRelationFilterObjectSchema } from './RoleListRelationFilter.schema';
import { MemberListRelationFilterObjectSchema } from './MemberListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MessageWhereInputObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MessageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MessageWhereInputObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    content: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    authorId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    color: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    backgroundColor: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    textChannelId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    author: z
      .union([
        z.lazy(() => MemberRelationFilterObjectSchema),
        z.lazy(() => MemberWhereInputObjectSchema),
      ])
      .optional(),
    textChannel: z
      .union([
        z.lazy(() => TextChannelRelationFilterObjectSchema),
        z.lazy(() => TextChannelWhereInputObjectSchema),
      ])
      .optional(),
    mentionedRoles: z.lazy(() => RoleListRelationFilterObjectSchema).optional(),
    mentionedMembers: z
      .lazy(() => MemberListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const MessageWhereInputObjectSchema = Schema;
