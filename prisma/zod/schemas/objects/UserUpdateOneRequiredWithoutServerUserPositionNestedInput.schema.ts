import { z } from 'zod';
import { UserCreateWithoutServerUserPositionInputObjectSchema } from './UserCreateWithoutServerUserPositionInput.schema';
import { UserUncheckedCreateWithoutServerUserPositionInputObjectSchema } from './UserUncheckedCreateWithoutServerUserPositionInput.schema';
import { UserCreateOrConnectWithoutServerUserPositionInputObjectSchema } from './UserCreateOrConnectWithoutServerUserPositionInput.schema';
import { UserUpsertWithoutServerUserPositionInputObjectSchema } from './UserUpsertWithoutServerUserPositionInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutServerUserPositionInputObjectSchema } from './UserUpdateWithoutServerUserPositionInput.schema';
import { UserUncheckedUpdateWithoutServerUserPositionInputObjectSchema } from './UserUncheckedUpdateWithoutServerUserPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutServerUserPositionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutServerUserPositionInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutServerUserPositionInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutServerUserPositionInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutServerUserPositionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutServerUserPositionInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutServerUserPositionInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutServerUserPositionNestedInputObjectSchema =
  Schema;
