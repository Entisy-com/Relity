import { z } from 'zod';
import { OnlineStatusSchema } from '../enums/OnlineStatus.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { AdminUserUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './AdminUserUncheckedCreateNestedOneWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { ServerUncheckedCreateNestedManyWithoutBannedUserInputObjectSchema } from './ServerUncheckedCreateNestedManyWithoutBannedUserInput.schema';
import { UserUncheckedCreateNestedManyWithoutFriendsWithInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutFriendsWithInput.schema';
import { UserUncheckedCreateNestedManyWithoutFriendsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutFriendsInput.schema';
import { MemberUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSettingsInput> = z
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
    adminuser: z
      .lazy(() => AdminUserUncheckedCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
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
  })
  .strict();

export const UserUncheckedCreateWithoutSettingsInputObjectSchema = Schema;
