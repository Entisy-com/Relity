import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { OnlineStatusSchema } from '../enums/OnlineStatus.schema';
import { EnumOnlineStatusFieldUpdateOperationsInputObjectSchema } from './EnumOnlineStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AdminUserUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './AdminUserUncheckedUpdateOneWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { UserSettingsUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './UserSettingsUncheckedUpdateOneWithoutUserNestedInput.schema';
import { ServerUncheckedUpdateManyWithoutBannedUserNestedInputObjectSchema } from './ServerUncheckedUpdateManyWithoutBannedUserNestedInput.schema';
import { UserUncheckedUpdateManyWithoutFriendsWithNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutFriendsWithNestedInput.schema';
import { UserUncheckedUpdateManyWithoutFriendsNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutFriendsNestedInput.schema';
import { MemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './MemberUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ServerUserPositionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ServerUserPositionUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z
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
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    emailVerified: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    banner: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    status: z
      .union([
        z.lazy(() => OnlineStatusSchema),
        z.lazy(() => EnumOnlineStatusFieldUpdateOperationsInputObjectSchema),
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
    accounts: z
      .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    adminuser: z
      .lazy(() => AdminUserUncheckedUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    settings: z
      .lazy(
        () => UserSettingsUncheckedUpdateOneWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    bannedon: z
      .lazy(
        () => ServerUncheckedUpdateManyWithoutBannedUserNestedInputObjectSchema,
      )
      .optional(),
    friends: z
      .lazy(
        () => UserUncheckedUpdateManyWithoutFriendsWithNestedInputObjectSchema,
      )
      .optional(),
    friendsWith: z
      .lazy(() => UserUncheckedUpdateManyWithoutFriendsNestedInputObjectSchema)
      .optional(),
    member: z
      .lazy(() => MemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    serverUserPosition: z
      .lazy(
        () =>
          ServerUserPositionUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateInputObjectSchema = Schema;
