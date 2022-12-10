import { z } from 'zod';
import { OnlineStatusSchema } from '../enums/OnlineStatus.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { AdminUserCreateNestedOneWithoutUserInputObjectSchema } from './AdminUserCreateNestedOneWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { UserSettingsCreateNestedOneWithoutUserInputObjectSchema } from './UserSettingsCreateNestedOneWithoutUserInput.schema';
import { ServerCreateNestedManyWithoutBannedUserInputObjectSchema } from './ServerCreateNestedManyWithoutBannedUserInput.schema';
import { UserCreateNestedManyWithoutFriendsWithInputObjectSchema } from './UserCreateNestedManyWithoutFriendsWithInput.schema';
import { UserCreateNestedManyWithoutFriendsInputObjectSchema } from './UserCreateNestedManyWithoutFriendsInput.schema';
import { MemberCreateNestedManyWithoutUserInputObjectSchema } from './MemberCreateNestedManyWithoutUserInput.schema';
import { ServerUserPositionCreateNestedManyWithoutUserInputObjectSchema } from './ServerUserPositionCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
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
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    adminuser: z
      .lazy(() => AdminUserCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    settings: z
      .lazy(() => UserSettingsCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    bannedon: z
      .lazy(() => ServerCreateNestedManyWithoutBannedUserInputObjectSchema)
      .optional(),
    friends: z
      .lazy(() => UserCreateNestedManyWithoutFriendsWithInputObjectSchema)
      .optional(),
    friendsWith: z
      .lazy(() => UserCreateNestedManyWithoutFriendsInputObjectSchema)
      .optional(),
    member: z
      .lazy(() => MemberCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    serverUserPosition: z
      .lazy(
        () => ServerUserPositionCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
