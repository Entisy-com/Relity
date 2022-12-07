import { z } from 'zod';
import { MessageCreateManyAuthorInputObjectSchema } from './MessageCreateManyAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateManyAuthorInputEnvelope> = z
  .object({
    data: z.lazy(() => MessageCreateManyAuthorInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MessageCreateManyAuthorInputEnvelopeObjectSchema = Schema;
