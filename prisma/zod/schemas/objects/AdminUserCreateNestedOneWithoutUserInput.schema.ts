import { z } from 'zod';
import { AdminUserCreateWithoutUserInputObjectSchema } from './AdminUserCreateWithoutUserInput.schema';
import { AdminUserUncheckedCreateWithoutUserInputObjectSchema } from './AdminUserUncheckedCreateWithoutUserInput.schema';
import { AdminUserCreateOrConnectWithoutUserInputObjectSchema } from './AdminUserCreateOrConnectWithoutUserInput.schema';
import { AdminUserWhereUniqueInputObjectSchema } from './AdminUserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AdminUserCreateNestedOneWithoutUserInput> = z
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
    connect: z.lazy(() => AdminUserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const AdminUserCreateNestedOneWithoutUserInputObjectSchema = Schema;
