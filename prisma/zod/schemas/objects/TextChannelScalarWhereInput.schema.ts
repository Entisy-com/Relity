import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumPermissionNullableListFilterObjectSchema } from './EnumPermissionNullableListFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TextChannelScalarWhereInputObjectSchema),
        z.lazy(() => TextChannelScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TextChannelScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TextChannelScalarWhereInputObjectSchema),
        z.lazy(() => TextChannelScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const TextChannelScalarWhereInputObjectSchema = Schema;
