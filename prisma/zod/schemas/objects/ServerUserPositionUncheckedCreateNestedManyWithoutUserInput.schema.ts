import { z } from 'zod';
import { ServerUserPositionCreateWithoutUserInputObjectSchema } from './ServerUserPositionCreateWithoutUserInput.schema';
import { ServerUserPositionUncheckedCreateWithoutUserInputObjectSchema } from './ServerUserPositionUncheckedCreateWithoutUserInput.schema';
import { ServerUserPositionCreateOrConnectWithoutUserInputObjectSchema } from './ServerUserPositionCreateOrConnectWithoutUserInput.schema';
import { ServerUserPositionCreateManyUserInputEnvelopeObjectSchema } from './ServerUserPositionCreateManyUserInputEnvelope.schema';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './ServerUserPositionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => ServerUserPositionCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
          z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ServerUserPositionUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
