import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBannedonInputObjectSchema } from './UserUpdateWithoutBannedonInput.schema';
import { UserUncheckedUpdateWithoutBannedonInputObjectSchema } from './UserUncheckedUpdateWithoutBannedonInput.schema';
import { UserCreateWithoutBannedonInputObjectSchema } from './UserCreateWithoutBannedonInput.schema';
import { UserUncheckedCreateWithoutBannedonInputObjectSchema } from './UserUncheckedCreateWithoutBannedonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutBannedonInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutBannedonInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBannedonInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutBannedonInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutBannedonInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutBannedonInputObjectSchema = Schema;
