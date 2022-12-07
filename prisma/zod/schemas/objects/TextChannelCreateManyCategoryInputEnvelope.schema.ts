import { z } from 'zod';
import { TextChannelCreateManyCategoryInputObjectSchema } from './TextChannelCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.lazy(() => TextChannelCreateManyCategoryInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TextChannelCreateManyCategoryInputEnvelopeObjectSchema = Schema;
