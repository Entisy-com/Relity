import { z } from 'zod';
import { UserUpdateWithoutMemberInputObjectSchema } from './UserUpdateWithoutMemberInput.schema';
import { UserUncheckedUpdateWithoutMemberInputObjectSchema } from './UserUncheckedUpdateWithoutMemberInput.schema';
import { UserCreateWithoutMemberInputObjectSchema } from './UserCreateWithoutMemberInput.schema';
import { UserUncheckedCreateWithoutMemberInputObjectSchema } from './UserUncheckedCreateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutMemberInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutMemberInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutMemberInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutMemberInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutMemberInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutMemberInputObjectSchema = Schema;
