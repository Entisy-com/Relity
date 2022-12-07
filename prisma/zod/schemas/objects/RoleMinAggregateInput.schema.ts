import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    serverid: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    visible: z.literal(true).optional(),
    color: z.literal(true).optional(),
    position: z.literal(true).optional(),
  })
  .strict();

export const RoleMinAggregateInputObjectSchema = Schema;
