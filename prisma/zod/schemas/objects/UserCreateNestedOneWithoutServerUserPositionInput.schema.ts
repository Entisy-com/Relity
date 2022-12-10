import { z } from 'zod';
import { UserCreateWithoutServerUserPositionInputObjectSchema } from './UserCreateWithoutServerUserPositionInput.schema';
import { UserUncheckedCreateWithoutServerUserPositionInputObjectSchema } from './UserUncheckedCreateWithoutServerUserPositionInput.schema';
import { UserCreateOrConnectWithoutServerUserPositionInputObjectSchema } from './UserCreateOrConnectWithoutServerUserPositionInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutServerUserPositionInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutServerUserPositionInputObjectSchema =
  Schema;
