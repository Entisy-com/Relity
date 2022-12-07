import { z } from 'zod';
import { TextChannelWhereInputObjectSchema } from './TextChannelWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelListRelationFilter> = z
  .object({
    every: z.lazy(() => TextChannelWhereInputObjectSchema).optional(),
    some: z.lazy(() => TextChannelWhereInputObjectSchema).optional(),
    none: z.lazy(() => TextChannelWhereInputObjectSchema).optional(),
  })
  .strict();

export const TextChannelListRelationFilterObjectSchema = Schema;
