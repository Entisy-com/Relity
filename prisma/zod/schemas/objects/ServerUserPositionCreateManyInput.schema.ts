import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateManyInput> = z
  .object({
    id: z.string().optional(),
    serverId: z.string(),
    userId: z.string(),
    position: z.number().optional(),
  })
  .strict();

export const ServerUserPositionCreateManyInputObjectSchema = Schema;
