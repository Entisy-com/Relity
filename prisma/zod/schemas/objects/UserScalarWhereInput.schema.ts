import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumOnlineStatusFilterObjectSchema } from './EnumOnlineStatusFilter.schema';
import { OnlineStatusSchema } from '../enums/OnlineStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const UserScalarWhereInputObjectSchema = Schema;
