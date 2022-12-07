import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AdminUserMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userid: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const AdminUserMaxAggregateInputObjectSchema = Schema;
