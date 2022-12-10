import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    serverId: z.string(),
    position: z.number().optional(),
  })
  .strict();

export const ServerUserPositionCreateManyUserInputObjectSchema = Schema;
