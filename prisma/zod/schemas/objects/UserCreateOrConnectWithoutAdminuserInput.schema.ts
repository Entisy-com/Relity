import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAdminuserInputObjectSchema } from './UserCreateWithoutAdminuserInput.schema';
import { UserUncheckedCreateWithoutAdminuserInputObjectSchema } from './UserUncheckedCreateWithoutAdminuserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAdminuserInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAdminuserInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAdminuserInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutAdminuserInputObjectSchema = Schema;
