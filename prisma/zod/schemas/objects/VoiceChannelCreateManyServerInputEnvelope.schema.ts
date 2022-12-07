import { z } from 'zod';
import { VoiceChannelCreateManyServerInputObjectSchema } from './VoiceChannelCreateManyServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelCreateManyServerInputEnvelope> = z
  .object({
    data: z.lazy(() => VoiceChannelCreateManyServerInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const VoiceChannelCreateManyServerInputEnvelopeObjectSchema = Schema;
