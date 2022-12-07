import { z } from 'zod';
import { VoiceChannelCreateWithoutCategoryInputObjectSchema } from './VoiceChannelCreateWithoutCategoryInput.schema';
import { VoiceChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutCategoryInput.schema';
import { VoiceChannelCreateOrConnectWithoutCategoryInputObjectSchema } from './VoiceChannelCreateOrConnectWithoutCategoryInput.schema';
import { VoiceChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './VoiceChannelUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { VoiceChannelCreateManyCategoryInputEnvelopeObjectSchema } from './VoiceChannelCreateManyCategoryInputEnvelope.schema';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './VoiceChannelUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { VoiceChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './VoiceChannelUpdateManyWithWhereWithoutCategoryInput.schema';
import { VoiceChannelScalarWhereInputObjectSchema } from './VoiceChannelScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUncheckedUpdateManyWithoutCategoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => VoiceChannelCreateWithoutCategoryInputObjectSchema),
          z
            .lazy(() => VoiceChannelCreateWithoutCategoryInputObjectSchema)
            .array(),
          z.lazy(
            () => VoiceChannelUncheckedCreateWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => VoiceChannelUncheckedCreateWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => VoiceChannelCreateOrConnectWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => VoiceChannelCreateOrConnectWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              VoiceChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => VoiceChannelCreateManyCategoryInputEnvelopeObjectSchema)
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
              VoiceChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              VoiceChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema,
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

export const VoiceChannelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
