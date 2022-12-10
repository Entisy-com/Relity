import { z } from 'zod';
import { ServerUserPositionCreateManyUserInputObjectSchema } from './ServerUserPositionCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateManyUserInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ServerUserPositionCreateManyUserInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ServerUserPositionCreateManyUserInputEnvelopeObjectSchema = Schema;
