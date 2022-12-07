import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserSettingsScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => UserSettingsScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserSettingsScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserSettingsScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => UserSettingsScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    userid: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const UserSettingsScalarWhereWithAggregatesInputObjectSchema = Schema;
