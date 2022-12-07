import { z } from 'zod';
import { UserUpdateWithoutAdminuserInputObjectSchema } from './UserUpdateWithoutAdminuserInput.schema';
import { UserUncheckedUpdateWithoutAdminuserInputObjectSchema } from './UserUncheckedUpdateWithoutAdminuserInput.schema';
import { UserCreateWithoutAdminuserInputObjectSchema } from './UserCreateWithoutAdminuserInput.schema';
import { UserUncheckedCreateWithoutAdminuserInputObjectSchema } from './UserUncheckedCreateWithoutAdminuserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutAdminuserInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAdminuserInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAdminuserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAdminuserInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAdminuserInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutAdminuserInputObjectSchema = Schema;
