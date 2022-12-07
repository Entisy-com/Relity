import { z } from 'zod';
import { RoleCreateManyServerInputObjectSchema } from './RoleCreateManyServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateManyServerInputEnvelope> = z
  .object({
    data: z.lazy(() => RoleCreateManyServerInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RoleCreateManyServerInputEnvelopeObjectSchema = Schema;
