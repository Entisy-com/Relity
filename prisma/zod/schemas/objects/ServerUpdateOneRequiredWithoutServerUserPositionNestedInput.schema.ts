import { z } from 'zod';
import { ServerCreateWithoutServerUserPositionInputObjectSchema } from './ServerCreateWithoutServerUserPositionInput.schema';
import { ServerUncheckedCreateWithoutServerUserPositionInputObjectSchema } from './ServerUncheckedCreateWithoutServerUserPositionInput.schema';
import { ServerCreateOrConnectWithoutServerUserPositionInputObjectSchema } from './ServerCreateOrConnectWithoutServerUserPositionInput.schema';
import { ServerUpsertWithoutServerUserPositionInputObjectSchema } from './ServerUpsertWithoutServerUserPositionInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutServerUserPositionInputObjectSchema } from './ServerUpdateWithoutServerUserPositionInput.schema';
import { ServerUncheckedUpdateWithoutServerUserPositionInputObjectSchema } from './ServerUncheckedUpdateWithoutServerUserPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateOneRequiredWithoutServerUserPositionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerCreateWithoutServerUserPositionInputObjectSchema),
          z.lazy(
            () =>
              ServerUncheckedCreateWithoutServerUserPositionInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ServerCreateOrConnectWithoutServerUserPositionInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ServerUpsertWithoutServerUserPositionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ServerUpdateWithoutServerUserPositionInputObjectSchema),
          z.lazy(
            () =>
              ServerUncheckedUpdateWithoutServerUserPositionInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ServerUpdateOneRequiredWithoutServerUserPositionNestedInputObjectSchema =
  Schema;
