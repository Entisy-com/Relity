import { z } from 'zod';
import { UserCreateWithoutAdminuserInputObjectSchema } from './UserCreateWithoutAdminuserInput.schema';
import { UserUncheckedCreateWithoutAdminuserInputObjectSchema } from './UserUncheckedCreateWithoutAdminuserInput.schema';
import { UserCreateOrConnectWithoutAdminuserInputObjectSchema } from './UserCreateOrConnectWithoutAdminuserInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutAdminuserInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutAdminuserInputObjectSchema = Schema;
