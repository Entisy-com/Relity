import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateManyServerInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    position: z.number().optional(),
  })
  .strict();

export const ServerUserPositionCreateManyServerInputObjectSchema = Schema;
