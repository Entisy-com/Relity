import { z } from 'zod';
import { ServerSettingsUpdateWithoutServerInputObjectSchema } from './ServerSettingsUpdateWithoutServerInput.schema';
import { ServerSettingsUncheckedUpdateWithoutServerInputObjectSchema } from './ServerSettingsUncheckedUpdateWithoutServerInput.schema';
import { ServerSettingsCreateWithoutServerInputObjectSchema } from './ServerSettingsCreateWithoutServerInput.schema';
import { ServerSettingsUncheckedCreateWithoutServerInputObjectSchema } from './ServerSettingsUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsUpsertWithoutServerInput> = z
  .object({
    update: z.union([
      z.lazy(() => ServerSettingsUpdateWithoutServerInputObjectSchema),
      z.lazy(() => ServerSettingsUncheckedUpdateWithoutServerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ServerSettingsCreateWithoutServerInputObjectSchema),
      z.lazy(() => ServerSettingsUncheckedCreateWithoutServerInputObjectSchema),
    ]),
  })
  .strict();

export const ServerSettingsUpsertWithoutServerInputObjectSchema = Schema;
