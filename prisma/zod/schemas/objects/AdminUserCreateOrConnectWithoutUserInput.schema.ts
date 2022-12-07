import { z } from 'zod';
import { AdminUserWhereUniqueInputObjectSchema } from './AdminUserWhereUniqueInput.schema';
import { AdminUserCreateWithoutUserInputObjectSchema } from './AdminUserCreateWithoutUserInput.schema';
import { AdminUserUncheckedCreateWithoutUserInputObjectSchema } from './AdminUserUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AdminUserCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => AdminUserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AdminUserCreateWithoutUserInputObjectSchema),
      z.lazy(() => AdminUserUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AdminUserCreateOrConnectWithoutUserInputObjectSchema = Schema;
