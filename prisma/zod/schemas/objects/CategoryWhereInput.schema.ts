import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPermissionNullableListFilterObjectSchema } from './EnumPermissionNullableListFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ServerRelationFilterObjectSchema } from './ServerRelationFilter.schema';
import { ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { TextChannelListRelationFilterObjectSchema } from './TextChannelListRelationFilter.schema';
import { VoiceChannelListRelationFilterObjectSchema } from './VoiceChannelListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CategoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    serverid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    permissions: z
      .lazy(() => EnumPermissionNullableListFilterObjectSchema)
      .optional(),
    position: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    server: z
      .union([
        z.lazy(() => ServerRelationFilterObjectSchema),
        z.lazy(() => ServerWhereInputObjectSchema),
      ])
      .optional(),
    textchannels: z
      .lazy(() => TextChannelListRelationFilterObjectSchema)
      .optional(),
    voicechannels: z
      .lazy(() => VoiceChannelListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryWhereInputObjectSchema = Schema;
