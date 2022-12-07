import { z } from 'zod';
import { ActionLogWhereInputObjectSchema } from './ActionLogWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogRelationFilter> = z
  .object({
    is: z.lazy(() => ActionLogWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ActionLogWhereInputObjectSchema).optional(),
  })
  .strict();

export const ActionLogRelationFilterObjectSchema = Schema;
