import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryUpdateManyWithoutServerNestedInputObjectSchema } from './CategoryUpdateManyWithoutServerNestedInput.schema';
import { RoleUpdateManyWithoutServerNestedInputObjectSchema } from './RoleUpdateManyWithoutServerNestedInput.schema';
import { TextChannelUpdateManyWithoutServerNestedInputObjectSchema } from './TextChannelUpdateManyWithoutServerNestedInput.schema';
import { VoiceChannelUpdateManyWithoutServerNestedInputObjectSchema } from './VoiceChannelUpdateManyWithoutServerNestedInput.schema';
import { MemberUpdateOneRequiredWithoutOwnerOfNestedInputObjectSchema } from './MemberUpdateOneRequiredWithoutOwnerOfNestedInput.schema';
import { MemberUpdateManyWithoutServerNestedInputObjectSchema } from './MemberUpdateManyWithoutServerNestedInput.schema';
import { UserUpdateManyWithoutBannedonNestedInputObjectSchema } from './UserUpdateManyWithoutBannedonNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateWithoutActionLogInput> = z
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
    pfp: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    banner: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    categories: z
      .lazy(() => CategoryUpdateManyWithoutServerNestedInputObjectSchema)
      .optional(),
    roles: z
      .lazy(() => RoleUpdateManyWithoutServerNestedInputObjectSchema)
      .optional(),
    textchannel: z
      .lazy(() => TextChannelUpdateManyWithoutServerNestedInputObjectSchema)
      .optional(),
    voicechannel: z
      .lazy(() => VoiceChannelUpdateManyWithoutServerNestedInputObjectSchema)
      .optional(),
    owner: z
      .lazy(() => MemberUpdateOneRequiredWithoutOwnerOfNestedInputObjectSchema)
      .optional(),
    members: z
      .lazy(() => MemberUpdateManyWithoutServerNestedInputObjectSchema)
      .optional(),
    bannedUser: z
      .lazy(() => UserUpdateManyWithoutBannedonNestedInputObjectSchema)
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ServerUpdateWithoutActionLogInputObjectSchema = Schema;
