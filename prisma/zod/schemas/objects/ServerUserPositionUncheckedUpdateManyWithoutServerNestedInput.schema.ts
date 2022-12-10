import { z } from 'zod';
import { ServerUserPositionCreateWithoutServerInputObjectSchema } from './ServerUserPositionCreateWithoutServerInput.schema';
import { ServerUserPositionUncheckedCreateWithoutServerInputObjectSchema } from './ServerUserPositionUncheckedCreateWithoutServerInput.schema';
import { ServerUserPositionCreateOrConnectWithoutServerInputObjectSchema } from './ServerUserPositionCreateOrConnectWithoutServerInput.schema';
import { ServerUserPositionUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './ServerUserPositionUpsertWithWhereUniqueWithoutServerInput.schema';
import { ServerUserPositionCreateManyServerInputEnvelopeObjectSchema } from './ServerUserPositionCreateManyServerInputEnvelope.schema';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './ServerUserPositionUpdateWithWhereUniqueWithoutServerInput.schema';
import { ServerUserPositionUpdateManyWithWhereWithoutServerInputObjectSchema } from './ServerUserPositionUpdateManyWithWhereWithoutServerInput.schema';
import { ServerUserPositionScalarWhereInputObjectSchema } from './ServerUserPositionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionUncheckedUpdateManyWithoutServerNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ServerUserPositionUpsertWithWhereUniqueWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUserPositionUpsertWithWhereUniqueWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ServerUserPositionCreateManyServerInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ServerUserPositionUpdateWithWhereUniqueWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUserPositionUpdateWithWhereUniqueWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ServerUserPositionUpdateManyWithWhereWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUserPositionUpdateManyWithWhereWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ServerUserPositionScalarWhereInputObjectSchema),
          z.lazy(() => ServerUserPositionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ServerUserPositionUncheckedUpdateManyWithoutServerNestedInputObjectSchema =
  Schema;
