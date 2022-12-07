import { z } from 'zod';
import { AdminUserWhereInputObjectSchema } from './AdminUserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AdminUserRelationFilter> = z
  .object({
    is: z
      .lazy(() => AdminUserWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AdminUserWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const AdminUserRelationFilterObjectSchema = Schema;
