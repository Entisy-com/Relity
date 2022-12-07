import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServerScalarWhereInputObjectSchema),
        z.lazy(() => ServerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServerScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServerScalarWhereInputObjectSchema),
        z.lazy(() => ServerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ownerid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pfp: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    banner: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ServerScalarWhereInputObjectSchema = Schema;
