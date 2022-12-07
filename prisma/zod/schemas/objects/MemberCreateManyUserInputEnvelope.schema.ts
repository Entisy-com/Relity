import { z } from 'zod';
import { MemberCreateManyUserInputObjectSchema } from './MemberCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => MemberCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MemberCreateManyUserInputEnvelopeObjectSchema = Schema;
