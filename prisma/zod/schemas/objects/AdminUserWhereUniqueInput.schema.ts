import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AdminUserWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userid: z.string().optional(),
  })
  .strict();

export const AdminUserWhereUniqueInputObjectSchema = Schema;
