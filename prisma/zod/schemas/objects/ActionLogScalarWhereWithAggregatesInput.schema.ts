import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ActionLogScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ActionLogScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ActionLogScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ActionLogScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ActionLogScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    serverId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ActionLogScalarWhereWithAggregatesInputObjectSchema = Schema;
