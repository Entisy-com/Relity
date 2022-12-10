import { z } from 'zod';
import { ServerSettingsCreateWithoutServerInputObjectSchema } from './ServerSettingsCreateWithoutServerInput.schema';
import { ServerSettingsUncheckedCreateWithoutServerInputObjectSchema } from './ServerSettingsUncheckedCreateWithoutServerInput.schema';
import { ServerSettingsCreateOrConnectWithoutServerInputObjectSchema } from './ServerSettingsCreateOrConnectWithoutServerInput.schema';
import { ServerSettingsWhereUniqueInputObjectSchema } from './ServerSettingsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsCreateNestedOneWithoutServerInput> =
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
      connect: z
        .lazy(() => ServerSettingsWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ServerSettingsCreateNestedOneWithoutServerInputObjectSchema =
  Schema;
