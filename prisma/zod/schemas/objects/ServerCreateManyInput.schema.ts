import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    ownerid: z.string(),
    pfp: z.string().optional(),
    banner: z.string().optional(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const ServerCreateManyInputObjectSchema = Schema;
