import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutVoicechannelInputObjectSchema } from './ServerCreateWithoutVoicechannelInput.schema';
import { ServerUncheckedCreateWithoutVoicechannelInputObjectSchema } from './ServerUncheckedCreateWithoutVoicechannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateOrConnectWithoutVoicechannelInput> =
  z
    .object({
      where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ServerCreateWithoutVoicechannelInputObjectSchema),
        z.lazy(() => ServerUncheckedCreateWithoutVoicechannelInputObjectSchema),
      ]),
    })
    .strict();

export const ServerCreateOrConnectWithoutVoicechannelInputObjectSchema = Schema;
