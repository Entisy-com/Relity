import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBannedonInputObjectSchema } from './UserCreateWithoutBannedonInput.schema';
import { UserUncheckedCreateWithoutBannedonInputObjectSchema } from './UserUncheckedCreateWithoutBannedonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBannedonInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutBannedonInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBannedonInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutBannedonInputObjectSchema = Schema;
