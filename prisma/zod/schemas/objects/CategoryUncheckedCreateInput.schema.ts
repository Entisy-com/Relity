import { z } from 'zod';
import { CategoryCreatepermissionsInputObjectSchema } from './CategoryCreatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { TextChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './TextChannelUncheckedCreateNestedManyWithoutCategoryInput.schema';
import { VoiceChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './VoiceChannelUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    serverid: z.string(),
    permissions: z
      .union([
        z.lazy(() => CategoryCreatepermissionsInputObjectSchema),
        z.lazy(() => PermissionSchema).array(),
      ])
      .optional(),
    position: z.number().optional(),
    textchannels: z
      .lazy(
        () =>
          TextChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
      )
      .optional(),
    voicechannels: z
      .lazy(
        () =>
          VoiceChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CategoryUncheckedCreateInputObjectSchema = Schema;
