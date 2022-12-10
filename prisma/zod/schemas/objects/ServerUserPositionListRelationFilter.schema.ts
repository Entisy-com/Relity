import { z } from 'zod';
import { ServerUserPositionWhereInputObjectSchema } from './ServerUserPositionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionListRelationFilter> = z
  .object({
    every: z.lazy(() => ServerUserPositionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ServerUserPositionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ServerUserPositionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ServerUserPositionListRelationFilterObjectSchema = Schema;
