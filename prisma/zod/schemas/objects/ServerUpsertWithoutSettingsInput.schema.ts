import { z } from 'zod';
import { ServerUpdateWithoutSettingsInputObjectSchema } from './ServerUpdateWithoutSettingsInput.schema';
import { ServerUncheckedUpdateWithoutSettingsInputObjectSchema } from './ServerUncheckedUpdateWithoutSettingsInput.schema';
import { ServerCreateWithoutSettingsInputObjectSchema } from './ServerCreateWithoutSettingsInput.schema';
import { ServerUncheckedCreateWithoutSettingsInputObjectSchema } from './ServerUncheckedCreateWithoutSettingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpsertWithoutSettingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ServerUpdateWithoutSettingsInputObjectSchema),
      z.lazy(() => ServerUncheckedUpdateWithoutSettingsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ServerCreateWithoutSettingsInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutSettingsInputObjectSchema),
    ]),
  })
  .strict();

export const ServerUpsertWithoutSettingsInputObjectSchema = Schema;
