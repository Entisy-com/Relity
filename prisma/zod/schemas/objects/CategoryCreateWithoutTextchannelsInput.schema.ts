import { z } from 'zod';
import { CategoryCreatepermissionsInputObjectSchema } from './CategoryCreatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { ServerCreateNestedOneWithoutCategoriesInputObjectSchema } from './ServerCreateNestedOneWithoutCategoriesInput.schema';
import { VoiceChannelCreateNestedManyWithoutCategoryInputObjectSchema } from './VoiceChannelCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateWithoutTextchannelsInput> = z
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
    server: z.lazy(
      () => ServerCreateNestedOneWithoutCategoriesInputObjectSchema,
    ),
    voicechannels: z
      .lazy(() => VoiceChannelCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryCreateWithoutTextchannelsInputObjectSchema = Schema;
