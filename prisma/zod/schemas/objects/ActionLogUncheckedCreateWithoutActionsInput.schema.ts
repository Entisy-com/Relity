import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUncheckedCreateWithoutActionsInput> = z
  .object({
    id: z.string().optional(),
    serverId: z.string(),
  })
  .strict();

export const ActionLogUncheckedCreateWithoutActionsInputObjectSchema = Schema;
