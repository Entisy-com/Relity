import { z } from 'zod';
import { ServerSettingsWhereUniqueInputObjectSchema } from './ServerSettingsWhereUniqueInput.schema';
import { ServerSettingsCreateWithoutServerInputObjectSchema } from './ServerSettingsCreateWithoutServerInput.schema';
import { ServerSettingsUncheckedCreateWithoutServerInputObjectSchema } from './ServerSettingsUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsCreateOrConnectWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => ServerSettingsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ServerSettingsCreateWithoutServerInputObjectSchema),
        z.lazy(
          () => ServerSettingsUncheckedCreateWithoutServerInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ServerSettingsCreateOrConnectWithoutServerInputObjectSchema =
  Schema;
