import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFriendsWithInputObjectSchema } from './UserCreateWithoutFriendsWithInput.schema';
import { UserUncheckedCreateWithoutFriendsWithInputObjectSchema } from './UserUncheckedCreateWithoutFriendsWithInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutFriendsWithInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutFriendsWithInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFriendsWithInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutFriendsWithInputObjectSchema = Schema;
