import { z } from 'zod';
import { ServerCreateWithoutTextchannelInputObjectSchema } from './ServerCreateWithoutTextchannelInput.schema';
import { ServerUncheckedCreateWithoutTextchannelInputObjectSchema } from './ServerUncheckedCreateWithoutTextchannelInput.schema';
import { ServerCreateOrConnectWithoutTextchannelInputObjectSchema } from './ServerCreateOrConnectWithoutTextchannelInput.schema';
import { ServerUpsertWithoutTextchannelInputObjectSchema } from './ServerUpsertWithoutTextchannelInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutTextchannelInputObjectSchema } from './ServerUpdateWithoutTextchannelInput.schema';
import { ServerUncheckedUpdateWithoutTextchannelInputObjectSchema } from './ServerUncheckedUpdateWithoutTextchannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateOneRequiredWithoutTextchannelNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerCreateWithoutTextchannelInputObjectSchema),
          z.lazy(
            () => ServerUncheckedCreateWithoutTextchannelInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ServerCreateOrConnectWithoutTextchannelInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ServerUpsertWithoutTextchannelInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ServerUpdateWithoutTextchannelInputObjectSchema),
          z.lazy(
            () => ServerUncheckedUpdateWithoutTextchannelInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ServerUpdateOneRequiredWithoutTextchannelNestedInputObjectSchema =
  Schema;
