import { z } from 'zod';
import { VoiceChannelCreateManyCategoryInputObjectSchema } from './VoiceChannelCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.lazy(() => VoiceChannelCreateManyCategoryInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const VoiceChannelCreateManyCategoryInputEnvelopeObjectSchema = Schema;
