import { z } from 'zod';
import { ServerUpdateWithoutVoicechannelInputObjectSchema } from './ServerUpdateWithoutVoicechannelInput.schema';
import { ServerUncheckedUpdateWithoutVoicechannelInputObjectSchema } from './ServerUncheckedUpdateWithoutVoicechannelInput.schema';
import { ServerCreateWithoutVoicechannelInputObjectSchema } from './ServerCreateWithoutVoicechannelInput.schema';
import { ServerUncheckedCreateWithoutVoicechannelInputObjectSchema } from './ServerUncheckedCreateWithoutVoicechannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpsertWithoutVoicechannelInput> = z
  .object({
    update: z.union([
      z.lazy(() => ServerUpdateWithoutVoicechannelInputObjectSchema),
      z.lazy(() => ServerUncheckedUpdateWithoutVoicechannelInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ServerCreateWithoutVoicechannelInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutVoicechannelInputObjectSchema),
    ]),
  })
  .strict();

export const ServerUpsertWithoutVoicechannelInputObjectSchema = Schema;
