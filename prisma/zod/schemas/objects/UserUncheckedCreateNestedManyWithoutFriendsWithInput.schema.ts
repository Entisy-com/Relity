import { z } from 'zod';
import { UserCreateWithoutFriendsWithInputObjectSchema } from './UserCreateWithoutFriendsWithInput.schema';
import { UserUncheckedCreateWithoutFriendsWithInputObjectSchema } from './UserUncheckedCreateWithoutFriendsWithInput.schema';
import { UserCreateOrConnectWithoutFriendsWithInputObjectSchema } from './UserCreateOrConnectWithoutFriendsWithInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutFriendsWithInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFriendsWithInputObjectSchema),
          z.lazy(() => UserCreateWithoutFriendsWithInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutFriendsWithInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutFriendsWithInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutFriendsWithInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutFriendsWithInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutFriendsWithInputObjectSchema =
  Schema;
