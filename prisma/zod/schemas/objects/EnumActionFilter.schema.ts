import { z } from 'zod';
import { ActionSchema } from '../enums/Action.schema';
import { NestedEnumActionFilterObjectSchema } from './NestedEnumActionFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumActionFilter> = z
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
        z.lazy(() => NestedEnumActionFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumActionFilterObjectSchema = Schema;
