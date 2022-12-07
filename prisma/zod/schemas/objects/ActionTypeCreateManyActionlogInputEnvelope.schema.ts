import { z } from 'zod';
import { ActionTypeCreateManyActionlogInputObjectSchema } from './ActionTypeCreateManyActionlogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeCreateManyActionlogInputEnvelope> = z
  .object({
    data: z.lazy(() => ActionTypeCreateManyActionlogInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ActionTypeCreateManyActionlogInputEnvelopeObjectSchema = Schema;
