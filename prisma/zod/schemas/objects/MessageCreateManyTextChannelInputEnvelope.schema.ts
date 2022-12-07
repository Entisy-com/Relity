import { z } from 'zod';
import { MessageCreateManyTextChannelInputObjectSchema } from './MessageCreateManyTextChannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateManyTextChannelInputEnvelope> = z
  .object({
    data: z.lazy(() => MessageCreateManyTextChannelInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MessageCreateManyTextChannelInputEnvelopeObjectSchema = Schema;
