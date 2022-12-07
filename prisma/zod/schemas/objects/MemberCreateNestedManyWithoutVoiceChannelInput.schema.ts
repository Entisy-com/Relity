import { z } from 'zod';
import { MemberCreateWithoutVoiceChannelInputObjectSchema } from './MemberCreateWithoutVoiceChannelInput.schema';
import { MemberUncheckedCreateWithoutVoiceChannelInputObjectSchema } from './MemberUncheckedCreateWithoutVoiceChannelInput.schema';
import { MemberCreateOrConnectWithoutVoiceChannelInputObjectSchema } from './MemberCreateOrConnectWithoutVoiceChannelInput.schema';
import { MemberCreateManyVoiceChannelInputEnvelopeObjectSchema } from './MemberCreateManyVoiceChannelInputEnvelope.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateNestedManyWithoutVoiceChannelInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MemberCreateWithoutVoiceChannelInputObjectSchema),
          z
            .lazy(() => MemberCreateWithoutVoiceChannelInputObjectSchema)
            .array(),
          z.lazy(
            () => MemberUncheckedCreateWithoutVoiceChannelInputObjectSchema,
          ),
          z
            .lazy(
              () => MemberUncheckedCreateWithoutVoiceChannelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MemberCreateOrConnectWithoutVoiceChannelInputObjectSchema,
          ),
          z
            .lazy(
              () => MemberCreateOrConnectWithoutVoiceChannelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MemberCreateManyVoiceChannelInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MemberCreateNestedManyWithoutVoiceChannelInputObjectSchema =
  Schema;
