import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AdminUserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    userid: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const AdminUserCreateManyInputObjectSchema = Schema;
