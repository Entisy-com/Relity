import { z } from 'zod';
import { TextChannelCreateManyServerInputObjectSchema } from './TextChannelCreateManyServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelCreateManyServerInputEnvelope> = z
  .object({
    data: z.lazy(() => TextChannelCreateManyServerInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TextChannelCreateManyServerInputEnvelopeObjectSchema = Schema;
