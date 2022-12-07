import { z } from 'zod';
import { UserSettingsCreateWithoutUserInputObjectSchema } from './UserSettingsCreateWithoutUserInput.schema';
import { UserSettingsUncheckedCreateWithoutUserInputObjectSchema } from './UserSettingsUncheckedCreateWithoutUserInput.schema';
import { UserSettingsCreateOrConnectWithoutUserInputObjectSchema } from './UserSettingsCreateOrConnectWithoutUserInput.schema';
import { UserSettingsUpsertWithoutUserInputObjectSchema } from './UserSettingsUpsertWithoutUserInput.schema';
import { UserSettingsWhereUniqueInputObjectSchema } from './UserSettingsWhereUniqueInput.schema';
import { UserSettingsUpdateWithoutUserInputObjectSchema } from './UserSettingsUpdateWithoutUserInput.schema';
import { UserSettingsUncheckedUpdateWithoutUserInputObjectSchema } from './UserSettingsUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsUpdateOneWithoutUserNestedInput> = z
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
    upsert: z
      .lazy(() => UserSettingsUpsertWithoutUserInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserSettingsWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserSettingsUpdateWithoutUserInputObjectSchema),
        z.lazy(() => UserSettingsUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserSettingsUpdateOneWithoutUserNestedInputObjectSchema = Schema;
