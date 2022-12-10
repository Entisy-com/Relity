import { z } from 'zod';
import { ServerUserPositionCreateWithoutServerInputObjectSchema } from './ServerUserPositionCreateWithoutServerInput.schema';
import { ServerUserPositionUncheckedCreateWithoutServerInputObjectSchema } from './ServerUserPositionUncheckedCreateWithoutServerInput.schema';
import { ServerUserPositionCreateOrConnectWithoutServerInputObjectSchema } from './ServerUserPositionCreateOrConnectWithoutServerInput.schema';
import { ServerUserPositionCreateManyServerInputEnvelopeObjectSchema } from './ServerUserPositionCreateManyServerInputEnvelope.schema';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './ServerUserPositionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateNestedManyWithoutServerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerUserPositionCreateWithoutServerInputObjectSchema),
          z
            .lazy(() => ServerUserPositionCreateWithoutServerInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              ServerUserPositionUncheckedCreateWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUserPositionUncheckedCreateWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ServerUserPositionCreateOrConnectWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUserPositionCreateOrConnectWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ServerUserPositionCreateManyServerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ServerUserPositionCreateNestedManyWithoutServerInputObjectSchema =
  Schema;
