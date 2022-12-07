import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VoiceChannelUpdatepermissionsInputObjectSchema } from './VoiceChannelUpdatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { MemberUpdateManyWithoutVoiceChannelNestedInputObjectSchema } from './MemberUpdateManyWithoutVoiceChannelNestedInput.schema';
import { CategoryUpdateOneWithoutVoicechannelsNestedInputObjectSchema } from './CategoryUpdateOneWithoutVoicechannelsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpdateWithoutServerInput> = z
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
    members: z
      .lazy(() => MemberUpdateManyWithoutVoiceChannelNestedInputObjectSchema)
      .optional(),
    category: z
      .lazy(() => CategoryUpdateOneWithoutVoicechannelsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const VoiceChannelUpdateWithoutServerInputObjectSchema = Schema;
