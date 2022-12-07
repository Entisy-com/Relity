import { z } from 'zod';
import { UserCreateWithoutBannedonInputObjectSchema } from './UserCreateWithoutBannedonInput.schema';
import { UserUncheckedCreateWithoutBannedonInputObjectSchema } from './UserUncheckedCreateWithoutBannedonInput.schema';
import { UserCreateOrConnectWithoutBannedonInputObjectSchema } from './UserCreateOrConnectWithoutBannedonInput.schema';
import { UserUpsertWithWhereUniqueWithoutBannedonInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutBannedonInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutBannedonInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutBannedonInput.schema';
import { UserUpdateManyWithWhereWithoutBannedonInputObjectSchema } from './UserUpdateManyWithWhereWithoutBannedonInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutBannedonNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutBannedonInputObjectSchema),
          z.lazy(() => UserCreateWithoutBannedonInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutBannedonInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutBannedonInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutBannedonInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutBannedonInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => UserUpsertWithWhereUniqueWithoutBannedonInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpsertWithWhereUniqueWithoutBannedonInputObjectSchema,
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
            () => UserUpdateWithWhereUniqueWithoutBannedonInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpdateWithWhereUniqueWithoutBannedonInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserUpdateManyWithWhereWithoutBannedonInputObjectSchema),
          z
            .lazy(() => UserUpdateManyWithWhereWithoutBannedonInputObjectSchema)
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

export const UserUncheckedUpdateManyWithoutBannedonNestedInputObjectSchema =
  Schema;
