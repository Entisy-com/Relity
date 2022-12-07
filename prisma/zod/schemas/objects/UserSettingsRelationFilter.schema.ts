import { z } from 'zod';
import { UserSettingsWhereInputObjectSchema } from './UserSettingsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsRelationFilter> = z
  .object({
    is: z
      .lazy(() => UserSettingsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => UserSettingsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const UserSettingsRelationFilterObjectSchema = Schema;
