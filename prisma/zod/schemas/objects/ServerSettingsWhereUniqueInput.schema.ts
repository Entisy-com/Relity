import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    serverid: z.string().optional(),
  })
  .strict();

export const ServerSettingsWhereUniqueInputObjectSchema = Schema;
