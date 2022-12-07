import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsCreateManyInput> = z
  .object({
    id: z.string().optional(),
    userid: z.string(),
  })
  .strict();

export const UserSettingsCreateManyInputObjectSchema = Schema;