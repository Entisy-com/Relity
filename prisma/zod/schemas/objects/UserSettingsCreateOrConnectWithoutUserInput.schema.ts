import { z } from 'zod';
import { UserSettingsWhereUniqueInputObjectSchema } from './UserSettingsWhereUniqueInput.schema';
import { UserSettingsCreateWithoutUserInputObjectSchema } from './UserSettingsCreateWithoutUserInput.schema';
import { UserSettingsUncheckedCreateWithoutUserInputObjectSchema } from './UserSettingsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => UserSettingsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserSettingsCreateWithoutUserInputObjectSchema),
      z.lazy(() => UserSettingsUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const UserSettingsCreateOrConnectWithoutUserInputObjectSchema = Schema;
