import { z } from 'zod';
import { ActionTypeWhereInputObjectSchema } from './ActionTypeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeListRelationFilter> = z
  .object({
    every: z.lazy(() => ActionTypeWhereInputObjectSchema).optional(),
    some: z.lazy(() => ActionTypeWhereInputObjectSchema).optional(),
    none: z.lazy(() => ActionTypeWhereInputObjectSchema).optional(),
  })
  .strict();

export const ActionTypeListRelationFilterObjectSchema = Schema;
