import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsCreateManyInput> = z
  .object({
    id: z.string().optional(),
    userid: z.string(),
    notifyUnban: z.boolean().optional(),
    notifyBan: z.boolean().optional(),
    notifyKick: z.boolean().optional(),
  })
  .strict();

export const UserSettingsCreateManyInputObjectSchema = Schema;
