import { z } from 'zod';
import { CategoryCreatepermissionsInputObjectSchema } from './CategoryCreatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { TextChannelCreateNestedManyWithoutCategoryInputObjectSchema } from './TextChannelCreateNestedManyWithoutCategoryInput.schema';
import { VoiceChannelCreateNestedManyWithoutCategoryInputObjectSchema } from './VoiceChannelCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateWithoutServerInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    permissions: z
      .union([
        z.lazy(() => CategoryCreatepermissionsInputObjectSchema),
        z.lazy(() => PermissionSchema).array(),
      ])
      .optional(),
    position: z.number().optional(),
    textchannels: z
      .lazy(() => TextChannelCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    voicechannels: z
      .lazy(() => VoiceChannelCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryCreateWithoutServerInputObjectSchema = Schema;
