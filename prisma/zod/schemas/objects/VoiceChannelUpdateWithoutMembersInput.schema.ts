import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VoiceChannelUpdatepermissionsInputObjectSchema } from './VoiceChannelUpdatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CategoryUpdateOneWithoutVoicechannelsNestedInputObjectSchema } from './CategoryUpdateOneWithoutVoicechannelsNestedInput.schema';
import { ServerUpdateOneRequiredWithoutVoicechannelNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutVoicechannelNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpdateWithoutMembersInput> = z
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
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    permissions: z
      .union([
        z.lazy(() => VoiceChannelUpdatepermissionsInputObjectSchema),
        z.lazy(() => PermissionSchema).array(),
      ])
      .optional(),
    position: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    category: z
      .lazy(() => CategoryUpdateOneWithoutVoicechannelsNestedInputObjectSchema)
      .optional(),
    server: z
      .lazy(
        () => ServerUpdateOneRequiredWithoutVoicechannelNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const VoiceChannelUpdateWithoutMembersInputObjectSchema = Schema;
