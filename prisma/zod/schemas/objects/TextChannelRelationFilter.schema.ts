import { z } from 'zod';
import { TextChannelWhereInputObjectSchema } from './TextChannelWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelRelationFilter> = z
  .object({
    is: z.lazy(() => TextChannelWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => TextChannelWhereInputObjectSchema).optional(),
  })
  .strict();

export const TextChannelRelationFilterObjectSchema = Schema;
