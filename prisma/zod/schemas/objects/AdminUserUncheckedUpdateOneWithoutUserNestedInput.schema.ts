import { z } from 'zod';
import { AdminUserCreateWithoutUserInputObjectSchema } from './AdminUserCreateWithoutUserInput.schema';
import { AdminUserUncheckedCreateWithoutUserInputObjectSchema } from './AdminUserUncheckedCreateWithoutUserInput.schema';
import { AdminUserCreateOrConnectWithoutUserInputObjectSchema } from './AdminUserCreateOrConnectWithoutUserInput.schema';
import { AdminUserUpsertWithoutUserInputObjectSchema } from './AdminUserUpsertWithoutUserInput.schema';
import { AdminUserWhereUniqueInputObjectSchema } from './AdminUserWhereUniqueInput.schema';
import { AdminUserUpdateWithoutUserInputObjectSchema } from './AdminUserUpdateWithoutUserInput.schema';
import { AdminUserUncheckedUpdateWithoutUserInputObjectSchema } from './AdminUserUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AdminUserUncheckedUpdateOneWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AdminUserCreateWithoutUserInputObjectSchema),
          z.lazy(() => AdminUserUncheckedCreateWithoutUserInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AdminUserCreateOrConnectWithoutUserInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => AdminUserUpsertWithoutUserInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => AdminUserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AdminUserUpdateWithoutUserInputObjectSchema),
          z.lazy(() => AdminUserUncheckedUpdateWithoutUserInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const AdminUserUncheckedUpdateOneWithoutUserNestedInputObjectSchema =
  Schema;
