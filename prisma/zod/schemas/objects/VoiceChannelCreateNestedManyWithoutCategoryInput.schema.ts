import { z } from 'zod';
import { VoiceChannelCreateWithoutCategoryInputObjectSchema } from './VoiceChannelCreateWithoutCategoryInput.schema';
import { VoiceChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutCategoryInput.schema';
import { VoiceChannelCreateOrConnectWithoutCategoryInputObjectSchema } from './VoiceChannelCreateOrConnectWithoutCategoryInput.schema';
import { VoiceChannelCreateManyCategoryInputEnvelopeObjectSchema } from './VoiceChannelCreateManyCategoryInputEnvelope.schema';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelCreateNestedManyWithoutCategoryInput> =
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
      createMany: z
        .lazy(() => VoiceChannelCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const VoiceChannelCreateNestedManyWithoutCategoryInputObjectSchema =
  Schema;
