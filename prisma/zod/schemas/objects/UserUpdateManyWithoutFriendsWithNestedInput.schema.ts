import { z } from 'zod';
import { UserCreateWithoutFriendsWithInputObjectSchema } from './UserCreateWithoutFriendsWithInput.schema';
import { UserUncheckedCreateWithoutFriendsWithInputObjectSchema } from './UserUncheckedCreateWithoutFriendsWithInput.schema';
import { UserCreateOrConnectWithoutFriendsWithInputObjectSchema } from './UserCreateOrConnectWithoutFriendsWithInput.schema';
import { UserUpsertWithWhereUniqueWithoutFriendsWithInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutFriendsWithInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutFriendsWithInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutFriendsWithInput.schema';
import { UserUpdateManyWithWhereWithoutFriendsWithInputObjectSchema } from './UserUpdateManyWithWhereWithoutFriendsWithInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutFriendsWithNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => UserUpsertWithWhereUniqueWithoutFriendsWithInputObjectSchema,
        ),
        z
          .lazy(
            () => UserUpsertWithWhereUniqueWithoutFriendsWithInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => UserUpdateWithWhereUniqueWithoutFriendsWithInputObjectSchema,
        ),
        z
          .lazy(
            () => UserUpdateWithWhereUniqueWithoutFriendsWithInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => UserUpdateManyWithWhereWithoutFriendsWithInputObjectSchema,
        ),
        z
          .lazy(
            () => UserUpdateManyWithWhereWithoutFriendsWithInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateManyWithoutFriendsWithNestedInputObjectSchema = Schema;
