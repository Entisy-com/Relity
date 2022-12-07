import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateManyTextChannelInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    authorId: z.string(),
    color: z.string().optional().nullable(),
    backgroundColor: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const MessageCreateManyTextChannelInputObjectSchema = Schema;
