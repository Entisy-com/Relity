import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserSettingsWhereInputObjectSchema),
        z.lazy(() => UserSettingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserSettingsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserSettingsWhereInputObjectSchema),
        z.lazy(() => UserSettingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserSettingsWhereInputObjectSchema = Schema;
