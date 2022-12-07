import { z } from 'zod';
import { UserCreateWithoutMemberInputObjectSchema } from './UserCreateWithoutMemberInput.schema';
import { UserUncheckedCreateWithoutMemberInputObjectSchema } from './UserUncheckedCreateWithoutMemberInput.schema';
import { UserCreateOrConnectWithoutMemberInputObjectSchema } from './UserCreateOrConnectWithoutMemberInput.schema';
import { UserUpsertWithoutMemberInputObjectSchema } from './UserUpsertWithoutMemberInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutMemberInputObjectSchema } from './UserUpdateWithoutMemberInput.schema';
import { UserUncheckedUpdateWithoutMemberInputObjectSchema } from './UserUncheckedUpdateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutMemberNestedInput> =
  z
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
      upsert: z.lazy(() => UserUpsertWithoutMemberInputObjectSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutMemberInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutMemberInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutMemberNestedInputObjectSchema = Schema;
