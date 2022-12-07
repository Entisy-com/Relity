import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './CategoryUncheckedUpdateManyWithoutServerNestedInput.schema';
import { RoleUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './RoleUncheckedUpdateManyWithoutServerNestedInput.schema';
import { TextChannelUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './TextChannelUncheckedUpdateManyWithoutServerNestedInput.schema';
import { VoiceChannelUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './VoiceChannelUncheckedUpdateManyWithoutServerNestedInput.schema';
import { MemberUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './MemberUncheckedUpdateManyWithoutServerNestedInput.schema';
import { UserUncheckedUpdateManyWithoutBannedonNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutBannedonNestedInput.schema';
import { ActionLogUncheckedUpdateOneWithoutServerNestedInputObjectSchema } from './ActionLogUncheckedUpdateOneWithoutServerNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUncheckedUpdateInput> = z
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
    ownerid: z
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
      .lazy(
        () => CategoryUncheckedUpdateManyWithoutServerNestedInputObjectSchema,
      )
      .optional(),
    roles: z
      .lazy(() => RoleUncheckedUpdateManyWithoutServerNestedInputObjectSchema)
      .optional(),
    textchannel: z
      .lazy(
        () =>
          TextChannelUncheckedUpdateManyWithoutServerNestedInputObjectSchema,
      )
      .optional(),
    voicechannel: z
      .lazy(
        () =>
          VoiceChannelUncheckedUpdateManyWithoutServerNestedInputObjectSchema,
      )
      .optional(),
    members: z
      .lazy(() => MemberUncheckedUpdateManyWithoutServerNestedInputObjectSchema)
      .optional(),
    bannedUser: z
      .lazy(() => UserUncheckedUpdateManyWithoutBannedonNestedInputObjectSchema)
      .optional(),
    actionLog: z
      .lazy(
        () => ActionLogUncheckedUpdateOneWithoutServerNestedInputObjectSchema,
      )
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

export const ServerUncheckedUpdateInputObjectSchema = Schema;
