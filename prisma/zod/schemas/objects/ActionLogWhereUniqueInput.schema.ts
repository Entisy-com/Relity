import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    serverId: z.string().optional(),
  })
  .strict();

export const ActionLogWhereUniqueInputObjectSchema = Schema;
