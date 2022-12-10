import { z } from 'zod';
import { ServerCreateWithoutSettingsInputObjectSchema } from './ServerCreateWithoutSettingsInput.schema';
import { ServerUncheckedCreateWithoutSettingsInputObjectSchema } from './ServerUncheckedCreateWithoutSettingsInput.schema';
import { ServerCreateOrConnectWithoutSettingsInputObjectSchema } from './ServerCreateOrConnectWithoutSettingsInput.schema';
import { ServerUpsertWithoutSettingsInputObjectSchema } from './ServerUpsertWithoutSettingsInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutSettingsInputObjectSchema } from './ServerUpdateWithoutSettingsInput.schema';
import { ServerUncheckedUpdateWithoutSettingsInputObjectSchema } from './ServerUncheckedUpdateWithoutSettingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateOneRequiredWithoutSettingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerCreateWithoutSettingsInputObjectSchema),
          z.lazy(() => ServerUncheckedCreateWithoutSettingsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ServerCreateOrConnectWithoutSettingsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ServerUpsertWithoutSettingsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ServerUpdateWithoutSettingsInputObjectSchema),
          z.lazy(() => ServerUncheckedUpdateWithoutSettingsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ServerUpdateOneRequiredWithoutSettingsNestedInputObjectSchema =
  Schema;
