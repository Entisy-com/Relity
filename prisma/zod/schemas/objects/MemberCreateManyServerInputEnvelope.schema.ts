import { z } from 'zod';
import { MemberCreateManyServerInputObjectSchema } from './MemberCreateManyServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateManyServerInputEnvelope> = z
  .object({
    data: z.lazy(() => MemberCreateManyServerInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MemberCreateManyServerInputEnvelopeObjectSchema = Schema;
