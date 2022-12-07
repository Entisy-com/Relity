import { z } from 'zod';
import { VoiceChannelCreateWithoutServerInputObjectSchema } from './VoiceChannelCreateWithoutServerInput.schema';
import { VoiceChannelUncheckedCreateWithoutServerInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutServerInput.schema';
import { VoiceChannelCreateOrConnectWithoutServerInputObjectSchema } from './VoiceChannelCreateOrConnectWithoutServerInput.schema';
import { VoiceChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './VoiceChannelUpsertWithWhereUniqueWithoutServerInput.schema';
import { VoiceChannelCreateManyServerInputEnvelopeObjectSchema } from './VoiceChannelCreateManyServerInputEnvelope.schema';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './VoiceChannelUpdateWithWhereUniqueWithoutServerInput.schema';
import { VoiceChannelUpdateManyWithWhereWithoutServerInputObjectSchema } from './VoiceChannelUpdateManyWithWhereWithoutServerInput.schema';
import { VoiceChannelScalarWhereInputObjectSchema } from './VoiceChannelScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpdateManyWithoutServerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => VoiceChannelCreateWithoutServerInputObjectSchema),
          z
            .lazy(() => VoiceChannelCreateWithoutServerInputObjectSchema)
            .array(),
          z.lazy(
            () => VoiceChannelUncheckedCreateWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () => VoiceChannelUncheckedCreateWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => VoiceChannelCreateOrConnectWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () => VoiceChannelCreateOrConnectWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              VoiceChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => VoiceChannelCreateManyServerInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              VoiceChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => VoiceChannelUpdateManyWithWhereWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceChannelUpdateManyWithWhereWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => VoiceChannelScalarWhereInputObjectSchema),
          z.lazy(() => VoiceChannelScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const VoiceChannelUpdateManyWithoutServerNestedInputObjectSchema =
  Schema;
