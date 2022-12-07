import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    userid: z.string(),
  })
  .strict();

export const UserSettingsUncheckedCreateInputObjectSchema = Schema;
