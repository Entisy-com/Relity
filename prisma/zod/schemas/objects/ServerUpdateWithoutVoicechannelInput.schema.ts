import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryUpdateManyWithoutServerNestedInputObjectSchema } from './CategoryUpdateManyWithoutServerNestedInput.schema';
import { RoleUpdateManyWithoutServerNestedInputObjectSchema } from './RoleUpdateManyWithoutServerNestedInput.schema';
import { TextChannelUpdateManyWithoutServerNestedInputObjectSchema } from './TextChannelUpdateManyWithoutServerNestedInput.schema';
import { MemberUpdateOneRequiredWithoutOwnerOfNestedInputObjectSchema } from './MemberUpdateOneRequiredWithoutOwnerOfNestedInput.schema';
import { MemberUpdateManyWithoutServerNestedInputObjectSchema } from './MemberUpdateManyWithoutServerNestedInput.schema';
import { UserUpdateManyWithoutBannedonNestedInputObjectSchema } from './UserUpdateManyWithoutBannedonNestedInput.schema';
import { ActionLogUpdateOneWithoutServerNestedInputObjectSchema } from './ActionLogUpdateOneWithoutServerNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ServerUserPositionUpdateManyWithoutServerNestedInputObjectSchema } from './ServerUserPositionUpdateManyWithoutServerNestedInput.schema';
import { ServerSettingsUpdateOneWithoutServerNestedInputObjectSchema } from './ServerSettingsUpdateOneWithoutServerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateWithoutVoicechannelInput> = z
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
    owner: z
      .lazy(() => MemberUpdateOneRequiredWithoutOwnerOfNestedInputObjectSchema)
      .optional(),
    members: z
      .lazy(() => MemberUpdateManyWithoutServerNestedInputObjectSchema)
      .optional(),
    bannedUser: z
      .lazy(() => UserUpdateManyWithoutBannedonNestedInputObjectSchema)
      .optional(),
    actionLog: z
      .lazy(() => ActionLogUpdateOneWithoutServerNestedInputObjectSchema)
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
    serverUserPosition: z
      .lazy(
        () => ServerUserPositionUpdateManyWithoutServerNestedInputObjectSchema,
      )
      .optional(),
    settings: z
      .lazy(() => ServerSettingsUpdateOneWithoutServerNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ServerUpdateWithoutVoicechannelInputObjectSchema = Schema;
