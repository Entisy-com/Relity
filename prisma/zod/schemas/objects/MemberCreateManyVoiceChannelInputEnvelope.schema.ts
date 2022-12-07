import { z } from 'zod';
import { MemberCreateManyVoiceChannelInputObjectSchema } from './MemberCreateManyVoiceChannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateManyVoiceChannelInputEnvelope> = z
  .object({
    data: z.lazy(() => MemberCreateManyVoiceChannelInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MemberCreateManyVoiceChannelInputEnvelopeObjectSchema = Schema;
