import { z } from 'zod';
import { ServerWhereInputObjectSchema } from './ServerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerRelationFilter> = z
  .object({
    is: z.lazy(() => ServerWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ServerWhereInputObjectSchema).optional(),
  })
  .strict();

export const ServerRelationFilterObjectSchema = Schema;
