import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBannedonInputObjectSchema } from './UserUpdateWithoutBannedonInput.schema';
import { UserUncheckedUpdateWithoutBannedonInputObjectSchema } from './UserUncheckedUpdateWithoutBannedonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutBannedonInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutBannedonInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBannedonInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutBannedonInputObjectSchema = Schema;
