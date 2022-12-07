import { z } from 'zod';
import { OnlineStatusSchema } from '../enums/OnlineStatus.schema';
import { NestedEnumOnlineStatusWithAggregatesFilterObjectSchema } from './NestedEnumOnlineStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumOnlineStatusFilterObjectSchema } from './NestedEnumOnlineStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumOnlineStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => OnlineStatusSchema).optional(),
    in: z
      .lazy(() => OnlineStatusSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => OnlineStatusSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => OnlineStatusSchema),
        z.lazy(() => NestedEnumOnlineStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumOnlineStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumOnlineStatusFilterObjectSchema).optional(),
  })
  .strict();

export const EnumOnlineStatusWithAggregatesFilterObjectSchema = Schema;
