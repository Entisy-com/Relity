import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutSettingsInputObjectSchema } from './ServerCreateWithoutSettingsInput.schema';
import { ServerUncheckedCreateWithoutSettingsInputObjectSchema } from './ServerUncheckedCreateWithoutSettingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateOrConnectWithoutSettingsInput> = z
  .object({
    where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ServerCreateWithoutSettingsInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutSettingsInputObjectSchema),
    ]),
  })
  .strict();

export const ServerCreateOrConnectWithoutSettingsInputObjectSchema = Schema;
