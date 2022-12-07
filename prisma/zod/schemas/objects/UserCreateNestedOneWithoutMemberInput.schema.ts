import { z } from 'zod';
import { UserCreateWithoutMemberInputObjectSchema } from './UserCreateWithoutMemberInput.schema';
import { UserUncheckedCreateWithoutMemberInputObjectSchema } from './UserUncheckedCreateWithoutMemberInput.schema';
import { UserCreateOrConnectWithoutMemberInputObjectSchema } from './UserCreateOrConnectWithoutMemberInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutMemberInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutMemberInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutMemberInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutMemberInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutMemberInputObjectSchema = Schema;
