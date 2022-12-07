import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutBannedUserInputObjectSchema } from './UserUncheckedUpdateManyWithoutBannedUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutBannedonInput> = z
  .object({
    where: z.lazy(() => UserScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateManyWithoutBannedUserInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateManyWithWhereWithoutBannedonInputObjectSchema = Schema;
