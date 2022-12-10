import { z } from 'zod';
import { OnlineStatusSchema } from '../enums/OnlineStatus.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserSettingsUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './UserSettingsUncheckedCreateNestedOneWithoutUserInput.schema';
import { ServerUncheckedCreateNestedManyWithoutBannedUserInputObjectSchema } from './ServerUncheckedCreateNestedManyWithoutBannedUserInput.schema';
import { UserUncheckedCreateNestedManyWithoutFriendsWithInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutFriendsWithInput.schema';
import { UserUncheckedCreateNestedManyWithoutFriendsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutFriendsInput.schema';
import { MemberUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutUserInput.schema';
import { ServerUserPositionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ServerUserPositionUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutAdminuserInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.date().optional().nullable(),
    image: z.string(),
    banner: z.string().optional().nullable(),
    status: z.lazy(() => OnlineStatusSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    settings: z
      .lazy(
        () => UserSettingsUncheckedCreateNestedOneWithoutUserInputObjectSchema,
      )
      .optional(),
    bannedon: z
      .lazy(
        () => ServerUncheckedCreateNestedManyWithoutBannedUserInputObjectSchema,
      )
      .optional(),
    friends: z
      .lazy(
        () => UserUncheckedCreateNestedManyWithoutFriendsWithInputObjectSchema,
      )
      .optional(),
    friendsWith: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutFriendsInputObjectSchema)
      .optional(),
    member: z
      .lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    serverUserPosition: z
      .lazy(
        () =>
          ServerUserPositionUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutAdminuserInputObjectSchema = Schema;
