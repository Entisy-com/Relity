import { z } from 'zod';
import { VoiceChannelCreateWithoutServerInputObjectSchema } from './VoiceChannelCreateWithoutServerInput.schema';
import { VoiceChannelUncheckedCreateWithoutServerInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutServerInput.schema';
import { VoiceChannelCreateOrConnectWithoutServerInputObjectSchema } from './VoiceChannelCreateOrConnectWithoutServerInput.schema';
import { VoiceChannelCreateManyServerInputEnvelopeObjectSchema } from './VoiceChannelCreateManyServerInputEnvelope.schema';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUncheckedCreateNestedManyWithoutServerInput> =
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
      createMany: z
        .lazy(() => VoiceChannelCreateManyServerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const VoiceChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema =
  Schema;
