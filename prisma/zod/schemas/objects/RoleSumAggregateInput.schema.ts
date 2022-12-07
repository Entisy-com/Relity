import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleSumAggregateInputType> = z
  .object({
    position: z.literal(true).optional(),
  })
  .strict();

export const RoleSumAggregateInputObjectSchema = Schema;
