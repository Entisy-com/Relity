import { z } from 'zod';
import { UserCreateWithoutAdminuserInputObjectSchema } from './UserCreateWithoutAdminuserInput.schema';
import { UserUncheckedCreateWithoutAdminuserInputObjectSchema } from './UserUncheckedCreateWithoutAdminuserInput.schema';
import { UserCreateOrConnectWithoutAdminuserInputObjectSchema } from './UserCreateOrConnectWithoutAdminuserInput.schema';
import { UserUpsertWithoutAdminuserInputObjectSchema } from './UserUpsertWithoutAdminuserInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAdminuserInputObjectSchema } from './UserUpdateWithoutAdminuserInput.schema';
import { UserUncheckedUpdateWithoutAdminuserInputObjectSchema } from './UserUncheckedUpdateWithoutAdminuserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAdminuserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAdminuserInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutAdminuserInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAdminuserInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutAdminuserInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutAdminuserInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAdminuserInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutAdminuserNestedInputObjectSchema =
  Schema;
