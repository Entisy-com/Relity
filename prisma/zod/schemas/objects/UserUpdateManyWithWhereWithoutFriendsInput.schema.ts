import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutFriendsWithInputObjectSchema } from './UserUncheckedUpdateManyWithoutFriendsWithInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutFriendsInput> = z
  .object({
    where: z.lazy(() => UserScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateManyWithoutFriendsWithInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateManyWithWhereWithoutFriendsInputObjectSchema = Schema;
