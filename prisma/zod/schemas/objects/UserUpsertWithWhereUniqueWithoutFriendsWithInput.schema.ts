import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutFriendsWithInputObjectSchema } from './UserUpdateWithoutFriendsWithInput.schema';
import { UserUncheckedUpdateWithoutFriendsWithInputObjectSchema } from './UserUncheckedUpdateWithoutFriendsWithInput.schema';
import { UserCreateWithoutFriendsWithInputObjectSchema } from './UserCreateWithoutFriendsWithInput.schema';
import { UserUncheckedCreateWithoutFriendsWithInputObjectSchema } from './UserUncheckedCreateWithoutFriendsWithInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutFriendsWithInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutFriendsWithInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutFriendsWithInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutFriendsWithInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutFriendsWithInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutFriendsWithInputObjectSchema =
  Schema;
