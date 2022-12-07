import { z } from 'zod';
import { UserSettingsCreateWithoutUserInputObjectSchema } from './UserSettingsCreateWithoutUserInput.schema';
import { UserSettingsUncheckedCreateWithoutUserInputObjectSchema } from './UserSettingsUncheckedCreateWithoutUserInput.schema';
import { UserSettingsCreateOrConnectWithoutUserInputObjectSchema } from './UserSettingsCreateOrConnectWithoutUserInput.schema';
import { UserSettingsWhereUniqueInputObjectSchema } from './UserSettingsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserSettingsCreateWithoutUserInputObjectSchema),
        z.lazy(() => UserSettingsUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserSettingsCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserSettingsWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserSettingsCreateNestedOneWithoutUserInputObjectSchema = Schema;
