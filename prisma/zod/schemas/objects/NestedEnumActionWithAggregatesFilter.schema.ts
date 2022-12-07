import { z } from 'zod';
import { ActionSchema } from '../enums/Action.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumActionFilterObjectSchema } from './NestedEnumActionFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumActionWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => ActionSchema).optional(),
    in: z
      .lazy(() => ActionSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => ActionSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => ActionSchema),
        z.lazy(() => NestedEnumActionWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumActionFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumActionFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumActionWithAggregatesFilterObjectSchema = Schema;
