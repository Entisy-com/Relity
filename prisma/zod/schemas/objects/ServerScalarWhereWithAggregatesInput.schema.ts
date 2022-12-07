import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServerScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ServerScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServerScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServerScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ServerScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    ownerid: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    pfp: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    banner: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ServerScalarWhereWithAggregatesInputObjectSchema = Schema;
