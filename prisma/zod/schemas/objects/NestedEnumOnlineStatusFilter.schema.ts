import { z } from 'zod';
import { OnlineStatusSchema } from '../enums/OnlineStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumOnlineStatusFilter> = z
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
        z.lazy(() => NestedEnumOnlineStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumOnlineStatusFilterObjectSchema = Schema;
