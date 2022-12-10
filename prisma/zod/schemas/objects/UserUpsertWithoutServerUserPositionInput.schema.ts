import { z } from 'zod';
import { UserUpdateWithoutServerUserPositionInputObjectSchema } from './UserUpdateWithoutServerUserPositionInput.schema';
import { UserUncheckedUpdateWithoutServerUserPositionInputObjectSchema } from './UserUncheckedUpdateWithoutServerUserPositionInput.schema';
import { UserCreateWithoutServerUserPositionInputObjectSchema } from './UserCreateWithoutServerUserPositionInput.schema';
import { UserUncheckedCreateWithoutServerUserPositionInputObjectSchema } from './UserUncheckedCreateWithoutServerUserPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutServerUserPositionInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutServerUserPositionInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutServerUserPositionInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutServerUserPositionInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutServerUserPositionInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutServerUserPositionInputObjectSchema = Schema;
