import { z } from 'zod';
import { AdminUserUpdateWithoutUserInputObjectSchema } from './AdminUserUpdateWithoutUserInput.schema';
import { AdminUserUncheckedUpdateWithoutUserInputObjectSchema } from './AdminUserUncheckedUpdateWithoutUserInput.schema';
import { AdminUserCreateWithoutUserInputObjectSchema } from './AdminUserCreateWithoutUserInput.schema';
import { AdminUserUncheckedCreateWithoutUserInputObjectSchema } from './AdminUserUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AdminUserUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => AdminUserUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AdminUserUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AdminUserCreateWithoutUserInputObjectSchema),
      z.lazy(() => AdminUserUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AdminUserUpsertWithoutUserInputObjectSchema = Schema;
