import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutMemberInputObjectSchema } from './UserCreateWithoutMemberInput.schema';
import { UserUncheckedCreateWithoutMemberInputObjectSchema } from './UserUncheckedCreateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutMemberInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutMemberInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutMemberInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutMemberInputObjectSchema = Schema;
