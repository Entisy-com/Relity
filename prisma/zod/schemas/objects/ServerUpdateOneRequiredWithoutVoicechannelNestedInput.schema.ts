import { z } from 'zod';
import { ServerCreateWithoutVoicechannelInputObjectSchema } from './ServerCreateWithoutVoicechannelInput.schema';
import { ServerUncheckedCreateWithoutVoicechannelInputObjectSchema } from './ServerUncheckedCreateWithoutVoicechannelInput.schema';
import { ServerCreateOrConnectWithoutVoicechannelInputObjectSchema } from './ServerCreateOrConnectWithoutVoicechannelInput.schema';
import { ServerUpsertWithoutVoicechannelInputObjectSchema } from './ServerUpsertWithoutVoicechannelInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutVoicechannelInputObjectSchema } from './ServerUpdateWithoutVoicechannelInput.schema';
import { ServerUncheckedUpdateWithoutVoicechannelInputObjectSchema } from './ServerUncheckedUpdateWithoutVoicechannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateOneRequiredWithoutVoicechannelNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerCreateWithoutVoicechannelInputObjectSchema),
          z.lazy(
            () => ServerUncheckedCreateWithoutVoicechannelInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ServerCreateOrConnectWithoutVoicechannelInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ServerUpsertWithoutVoicechannelInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ServerUpdateWithoutVoicechannelInputObjectSchema),
          z.lazy(
            () => ServerUncheckedUpdateWithoutVoicechannelInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ServerUpdateOneRequiredWithoutVoicechannelNestedInputObjectSchema =
  Schema;
