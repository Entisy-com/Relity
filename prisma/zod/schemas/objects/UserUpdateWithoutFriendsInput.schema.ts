import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { OnlineStatusSchema } from '../enums/OnlineStatus.schema';
import { EnumOnlineStatusFieldUpdateOperationsInputObjectSchema } from './EnumOnlineStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { AdminUserUpdateOneWithoutUserNestedInputObjectSchema } from './AdminUserUpdateOneWithoutUserNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { UserSettingsUpdateOneWithoutUserNestedInputObjectSchema } from './UserSettingsUpdateOneWithoutUserNestedInput.schema';
import { ServerUpdateManyWithoutBannedUserNestedInputObjectSchema } from './ServerUpdateManyWithoutBannedUserNestedInput.schema';
import { UserUpdateManyWithoutFriendsNestedInputObjectSchema } from './UserUpdateManyWithoutFriendsNestedInput.schema';
import { MemberUpdateManyWithoutUserNestedInputObjectSchema } from './MemberUpdateManyWithoutUserNestedInput.schema';
import { ServerUserPositionUpdateManyWithoutUserNestedInputObjectSchema } from './ServerUserPositionUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutFriendsInput> = z
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
      .lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    adminuser: z
      .lazy(() => AdminUserUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    settings: z
      .lazy(() => UserSettingsUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    bannedon: z
      .lazy(() => ServerUpdateManyWithoutBannedUserNestedInputObjectSchema)
      .optional(),
    friendsWith: z
      .lazy(() => UserUpdateManyWithoutFriendsNestedInputObjectSchema)
      .optional(),
    member: z
      .lazy(() => MemberUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    serverUserPosition: z
      .lazy(
        () => ServerUserPositionUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUpdateWithoutFriendsInputObjectSchema = Schema;
