import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutFriendsWithInputObjectSchema } from './UserUpdateWithoutFriendsWithInput.schema';
import { UserUncheckedUpdateWithoutFriendsWithInputObjectSchema } from './UserUncheckedUpdateWithoutFriendsWithInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutFriendsWithInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutFriendsWithInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutFriendsWithInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutFriendsWithInputObjectSchema =
  Schema;
