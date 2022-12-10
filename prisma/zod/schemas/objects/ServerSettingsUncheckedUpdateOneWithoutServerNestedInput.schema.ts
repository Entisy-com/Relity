import { z } from 'zod';
import { ServerSettingsCreateWithoutServerInputObjectSchema } from './ServerSettingsCreateWithoutServerInput.schema';
import { ServerSettingsUncheckedCreateWithoutServerInputObjectSchema } from './ServerSettingsUncheckedCreateWithoutServerInput.schema';
import { ServerSettingsCreateOrConnectWithoutServerInputObjectSchema } from './ServerSettingsCreateOrConnectWithoutServerInput.schema';
import { ServerSettingsUpsertWithoutServerInputObjectSchema } from './ServerSettingsUpsertWithoutServerInput.schema';
import { ServerSettingsWhereUniqueInputObjectSchema } from './ServerSettingsWhereUniqueInput.schema';
import { ServerSettingsUpdateWithoutServerInputObjectSchema } from './ServerSettingsUpdateWithoutServerInput.schema';
import { ServerSettingsUncheckedUpdateWithoutServerInputObjectSchema } from './ServerSettingsUncheckedUpdateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsUncheckedUpdateOneWithoutServerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerSettingsCreateWithoutServerInputObjectSchema),
          z.lazy(
            () => ServerSettingsUncheckedCreateWithoutServerInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ServerSettingsCreateOrConnectWithoutServerInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ServerSettingsUpsertWithoutServerInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => ServerSettingsWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => ServerSettingsUpdateWithoutServerInputObjectSchema),
          z.lazy(
            () => ServerSettingsUncheckedUpdateWithoutServerInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ServerSettingsUncheckedUpdateOneWithoutServerNestedInputObjectSchema =
  Schema;
