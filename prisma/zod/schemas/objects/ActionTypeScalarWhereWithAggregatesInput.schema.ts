import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumActionWithAggregatesFilterObjectSchema } from './EnumActionWithAggregatesFilter.schema';
import { ActionSchema } from '../enums/Action.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ActionTypeScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ActionTypeScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ActionTypeScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ActionTypeScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ActionTypeScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    memberId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    action: z
      .union([
        z.lazy(() => EnumActionWithAggregatesFilterObjectSchema),
        z.lazy(() => ActionSchema),
      ])
      .optional(),
    actionlogid: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ActionTypeScalarWhereWithAggregatesInputObjectSchema = Schema;
