import { z } from 'zod';
import { VoiceChannelWhereInputObjectSchema } from './VoiceChannelWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelRelationFilter> = z
  .object({
    is: z
      .lazy(() => VoiceChannelWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VoiceChannelWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const VoiceChannelRelationFilterObjectSchema = Schema;
