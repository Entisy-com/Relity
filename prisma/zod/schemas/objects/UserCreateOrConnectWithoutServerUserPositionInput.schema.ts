import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutServerUserPositionInputObjectSchema } from './UserCreateWithoutServerUserPositionInput.schema';
import { UserUncheckedCreateWithoutServerUserPositionInputObjectSchema } from './UserUncheckedCreateWithoutServerUserPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutServerUserPositionInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutServerUserPositionInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutServerUserPositionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutServerUserPositionInputObjectSchema =
  Schema;
