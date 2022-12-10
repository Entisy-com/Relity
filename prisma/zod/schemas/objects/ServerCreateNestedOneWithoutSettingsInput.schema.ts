import { z } from 'zod';
import { ServerCreateWithoutSettingsInputObjectSchema } from './ServerCreateWithoutSettingsInput.schema';
import { ServerUncheckedCreateWithoutSettingsInputObjectSchema } from './ServerUncheckedCreateWithoutSettingsInput.schema';
import { ServerCreateOrConnectWithoutSettingsInputObjectSchema } from './ServerCreateOrConnectWithoutSettingsInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateNestedOneWithoutSettingsInput> = z
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
    connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ServerCreateNestedOneWithoutSettingsInputObjectSchema = Schema;
