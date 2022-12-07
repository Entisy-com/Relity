import { z } from 'zod';
import { VoiceChannelWhereInputObjectSchema } from './VoiceChannelWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelListRelationFilter> = z
  .object({
    every: z.lazy(() => VoiceChannelWhereInputObjectSchema).optional(),
    some: z.lazy(() => VoiceChannelWhereInputObjectSchema).optional(),
    none: z.lazy(() => VoiceChannelWhereInputObjectSchema).optional(),
  })
  .strict();

export const VoiceChannelListRelationFilterObjectSchema = Schema;
