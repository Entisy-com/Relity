import { z } from 'zod';
import { ActionTypeCreateWithoutActionlogInputObjectSchema } from './ActionTypeCreateWithoutActionlogInput.schema';
import { ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema } from './ActionTypeUncheckedCreateWithoutActionlogInput.schema';
import { ActionTypeCreateOrConnectWithoutActionlogInputObjectSchema } from './ActionTypeCreateOrConnectWithoutActionlogInput.schema';
import { ActionTypeUpsertWithWhereUniqueWithoutActionlogInputObjectSchema } from './ActionTypeUpsertWithWhereUniqueWithoutActionlogInput.schema';
import { ActionTypeCreateManyActionlogInputEnvelopeObjectSchema } from './ActionTypeCreateManyActionlogInputEnvelope.schema';
import { ActionTypeWhereUniqueInputObjectSchema } from './ActionTypeWhereUniqueInput.schema';
import { ActionTypeUpdateWithWhereUniqueWithoutActionlogInputObjectSchema } from './ActionTypeUpdateWithWhereUniqueWithoutActionlogInput.schema';
import { ActionTypeUpdateManyWithWhereWithoutActionlogInputObjectSchema } from './ActionTypeUpdateManyWithWhereWithoutActionlogInput.schema';
import { ActionTypeScalarWhereInputObjectSchema } from './ActionTypeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUpdateManyWithoutActionlogNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ActionTypeCreateWithoutActionlogInputObjectSchema),
          z
            .lazy(() => ActionTypeCreateWithoutActionlogInputObjectSchema)
            .array(),
          z.lazy(
            () => ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema,
          ),
          z
            .lazy(
              () => ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ActionTypeCreateOrConnectWithoutActionlogInputObjectSchema,
          ),
          z
            .lazy(
              () => ActionTypeCreateOrConnectWithoutActionlogInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ActionTypeUpsertWithWhereUniqueWithoutActionlogInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ActionTypeUpsertWithWhereUniqueWithoutActionlogInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ActionTypeCreateManyActionlogInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ActionTypeUpdateWithWhereUniqueWithoutActionlogInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ActionTypeUpdateWithWhereUniqueWithoutActionlogInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ActionTypeUpdateManyWithWhereWithoutActionlogInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ActionTypeUpdateManyWithWhereWithoutActionlogInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ActionTypeScalarWhereInputObjectSchema),
          z.lazy(() => ActionTypeScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ActionTypeUpdateManyWithoutActionlogNestedInputObjectSchema =
  Schema;
