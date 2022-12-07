import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryUpdatepermissionsInputObjectSchema } from './CategoryUpdatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TextChannelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './TextChannelUncheckedUpdateManyWithoutCategoryNestedInput.schema';
import { VoiceChannelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './VoiceChannelUncheckedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    serverid: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    permissions: z
      .union([
        z.lazy(() => CategoryUpdatepermissionsInputObjectSchema),
        z.lazy(() => PermissionSchema).array(),
      ])
      .optional(),
    position: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    textchannels: z
      .lazy(
        () =>
          TextChannelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
      )
      .optional(),
    voicechannels: z
      .lazy(
        () =>
          VoiceChannelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CategoryUncheckedUpdateInputObjectSchema = Schema;
