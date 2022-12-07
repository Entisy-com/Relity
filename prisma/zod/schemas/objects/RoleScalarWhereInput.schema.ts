import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPermissionNullableListFilterObjectSchema } from './EnumPermissionNullableListFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleScalarWhereInputObjectSchema),
        z.lazy(() => RoleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleScalarWhereInputObjectSchema),
        z.lazy(() => RoleScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const RoleScalarWhereInputObjectSchema = Schema;
