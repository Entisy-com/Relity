import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    notifyUnban: z.boolean().optional(),
    notifyBan: z.boolean().optional(),
    notifyKick: z.boolean().optional(),
  })
  .strict();

export const UserSettingsCreateWithoutUserInputObjectSchema = Schema;
