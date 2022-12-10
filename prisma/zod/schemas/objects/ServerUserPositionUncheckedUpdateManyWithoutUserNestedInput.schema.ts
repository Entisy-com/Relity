import { z } from 'zod';
import { ServerUserPositionCreateWithoutUserInputObjectSchema } from './ServerUserPositionCreateWithoutUserInput.schema';
import { ServerUserPositionUncheckedCreateWithoutUserInputObjectSchema } from './ServerUserPositionUncheckedCreateWithoutUserInput.schema';
import { ServerUserPositionCreateOrConnectWithoutUserInputObjectSchema } from './ServerUserPositionCreateOrConnectWithoutUserInput.schema';
import { ServerUserPositionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ServerUserPositionUpsertWithWhereUniqueWithoutUserInput.schema';
import { ServerUserPositionCreateManyUserInputEnvelopeObjectSchema } from './ServerUserPositionCreateManyUserInputEnvelope.schema';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ServerUserPositionUpdateWithWhereUniqueWithoutUserInput.schema';
import { ServerUserPositionUpdateManyWithWhereWithoutUserInputObjectSchema } from './ServerUserPositionUpdateManyWithWhereWithoutUserInput.schema';
import { ServerUserPositionScalarWhereInputObjectSchema } from './ServerUserPositionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerUserPositionCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ServerUserPositionCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => ServerUserPositionUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUserPositionUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ServerUserPositionCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUserPositionCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ServerUserPositionUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUserPositionUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ServerUserPositionCreateManyUserInputEnvelopeObjectSchema)
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
              ServerUserPositionUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUserPositionUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ServerUserPositionUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUserPositionUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const ServerUserPositionUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
