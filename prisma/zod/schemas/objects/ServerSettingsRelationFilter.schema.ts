import { z } from 'zod';
import { ServerSettingsWhereInputObjectSchema } from './ServerSettingsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsRelationFilter> = z
  .object({
    is: z
      .lazy(() => ServerSettingsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ServerSettingsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ServerSettingsRelationFilterObjectSchema = Schema;
