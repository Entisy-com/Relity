import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumPermissionNullableListFilterObjectSchema } from './EnumPermissionNullableListFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VoiceChannelScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => VoiceChannelScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VoiceChannelScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VoiceChannelScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => VoiceChannelScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    serverid: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    categoryid: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    permissions: z
      .lazy(() => EnumPermissionNullableListFilterObjectSchema)
      .optional(),
    position: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const VoiceChannelScalarWhereWithAggregatesInputObjectSchema = Schema;
