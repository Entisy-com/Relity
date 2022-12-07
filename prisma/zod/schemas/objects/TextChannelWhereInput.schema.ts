import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumPermissionNullableListFilterObjectSchema } from './EnumPermissionNullableListFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema';
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema';
import { CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { ServerRelationFilterObjectSchema } from './ServerRelationFilter.schema';
import { ServerWhereInputObjectSchema } from './ServerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TextChannelWhereInputObjectSchema),
        z.lazy(() => TextChannelWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TextChannelWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TextChannelWhereInputObjectSchema),
        z.lazy(() => TextChannelWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
    categoryid: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    permissions: z
      .lazy(() => EnumPermissionNullableListFilterObjectSchema)
      .optional(),
    position: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    messages: z.lazy(() => MessageListRelationFilterObjectSchema).optional(),
    category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    server: z
      .union([
        z.lazy(() => ServerRelationFilterObjectSchema),
        z.lazy(() => ServerWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TextChannelWhereInputObjectSchema = Schema;
