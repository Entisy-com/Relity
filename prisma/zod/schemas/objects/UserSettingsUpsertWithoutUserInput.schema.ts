import { z } from 'zod';
import { UserSettingsUpdateWithoutUserInputObjectSchema } from './UserSettingsUpdateWithoutUserInput.schema';
import { UserSettingsUncheckedUpdateWithoutUserInputObjectSchema } from './UserSettingsUncheckedUpdateWithoutUserInput.schema';
import { UserSettingsCreateWithoutUserInputObjectSchema } from './UserSettingsCreateWithoutUserInput.schema';
import { UserSettingsUncheckedCreateWithoutUserInputObjectSchema } from './UserSettingsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserSettingsUpdateWithoutUserInputObjectSchema),
      z.lazy(() => UserSettingsUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserSettingsCreateWithoutUserInputObjectSchema),
      z.lazy(() => UserSettingsUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const UserSettingsUpsertWithoutUserInputObjectSchema = Schema;
