import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MessageScalarWhereInputObjectSchema),
        z.lazy(() => MessageScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MessageScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MessageScalarWhereInputObjectSchema),
        z.lazy(() => MessageScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    content: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    authorId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    color: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    backgroundColor: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    textChannelId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const MessageScalarWhereInputObjectSchema = Schema;
