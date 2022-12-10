import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    serverId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    position: z.literal(true).optional(),
  })
  .strict();

export const ServerUserPositionMaxAggregateInputObjectSchema = Schema;
