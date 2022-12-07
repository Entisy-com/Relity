import { z } from 'zod';
import { TextChannelCreateWithoutServerInputObjectSchema } from './TextChannelCreateWithoutServerInput.schema';
import { TextChannelUncheckedCreateWithoutServerInputObjectSchema } from './TextChannelUncheckedCreateWithoutServerInput.schema';
import { TextChannelCreateOrConnectWithoutServerInputObjectSchema } from './TextChannelCreateOrConnectWithoutServerInput.schema';
import { TextChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './TextChannelUpsertWithWhereUniqueWithoutServerInput.schema';
import { TextChannelCreateManyServerInputEnvelopeObjectSchema } from './TextChannelCreateManyServerInputEnvelope.schema';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';
import { TextChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './TextChannelUpdateWithWhereUniqueWithoutServerInput.schema';
import { TextChannelUpdateManyWithWhereWithoutServerInputObjectSchema } from './TextChannelUpdateManyWithWhereWithoutServerInput.schema';
import { TextChannelScalarWhereInputObjectSchema } from './TextChannelScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUncheckedUpdateManyWithoutServerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TextChannelCreateWithoutServerInputObjectSchema),
          z.lazy(() => TextChannelCreateWithoutServerInputObjectSchema).array(),
          z.lazy(
            () => TextChannelUncheckedCreateWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () => TextChannelUncheckedCreateWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TextChannelCreateOrConnectWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () => TextChannelCreateOrConnectWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TextChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TextChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TextChannelCreateManyServerInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TextChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TextChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TextChannelUpdateManyWithWhereWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TextChannelUpdateManyWithWhereWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TextChannelScalarWhereInputObjectSchema),
          z.lazy(() => TextChannelScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TextChannelUncheckedUpdateManyWithoutServerNestedInputObjectSchema =
  Schema;
