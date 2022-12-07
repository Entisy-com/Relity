import { z } from 'zod';
import { UserCreateWithoutBannedonInputObjectSchema } from './UserCreateWithoutBannedonInput.schema';
import { UserUncheckedCreateWithoutBannedonInputObjectSchema } from './UserUncheckedCreateWithoutBannedonInput.schema';
import { UserCreateOrConnectWithoutBannedonInputObjectSchema } from './UserCreateOrConnectWithoutBannedonInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutBannedonInput> =
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
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutBannedonInputObjectSchema =
  Schema;
