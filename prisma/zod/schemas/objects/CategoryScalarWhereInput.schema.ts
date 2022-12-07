import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPermissionNullableListFilterObjectSchema } from './EnumPermissionNullableListFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CategoryScalarWhereInputObjectSchema),
        z.lazy(() => CategoryScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CategoryScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CategoryScalarWhereInputObjectSchema),
        z.lazy(() => CategoryScalarWhereInputObjectSchema).array(),
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
    permissions: z
      .lazy(() => EnumPermissionNullableListFilterObjectSchema)
      .optional(),
    position: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const CategoryScalarWhereInputObjectSchema = Schema;
