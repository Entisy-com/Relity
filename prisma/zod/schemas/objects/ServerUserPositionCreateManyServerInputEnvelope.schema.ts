import { z } from 'zod';
import { ServerUserPositionCreateManyServerInputObjectSchema } from './ServerUserPositionCreateManyServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateManyServerInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ServerUserPositionCreateManyServerInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ServerUserPositionCreateManyServerInputEnvelopeObjectSchema =
  Schema;
