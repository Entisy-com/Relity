import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogCreateManyInput> = z
  .object({
    id: z.string().optional(),
    serverId: z.string(),
  })
  .strict();

export const ActionLogCreateManyInputObjectSchema = Schema;
