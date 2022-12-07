import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    content: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
    color: z.literal(true).optional(),
    backgroundColor: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    textChannelId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const MessageCountAggregateInputObjectSchema = Schema;
