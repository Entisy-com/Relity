import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateManyInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    authorId: z.string(),
    color: z.string().optional().nullable(),
    backgroundColor: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    textChannelId: z.string(),
  })
  .strict();

export const MessageCreateManyInputObjectSchema = Schema;
