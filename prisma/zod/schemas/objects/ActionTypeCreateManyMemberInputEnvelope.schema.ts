import { z } from 'zod';
import { ActionTypeCreateManyMemberInputObjectSchema } from './ActionTypeCreateManyMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeCreateManyMemberInputEnvelope> = z
  .object({
    data: z.lazy(() => ActionTypeCreateManyMemberInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ActionTypeCreateManyMemberInputEnvelopeObjectSchema = Schema;
