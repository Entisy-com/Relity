import { z } from 'zod';
import { MemberCreateWithoutVoiceChannelInputObjectSchema } from './MemberCreateWithoutVoiceChannelInput.schema';
import { MemberUncheckedCreateWithoutVoiceChannelInputObjectSchema } from './MemberUncheckedCreateWithoutVoiceChannelInput.schema';
import { MemberCreateOrConnectWithoutVoiceChannelInputObjectSchema } from './MemberCreateOrConnectWithoutVoiceChannelInput.schema';
import { MemberUpsertWithWhereUniqueWithoutVoiceChannelInputObjectSchema } from './MemberUpsertWithWhereUniqueWithoutVoiceChannelInput.schema';
import { MemberCreateManyVoiceChannelInputEnvelopeObjectSchema } from './MemberCreateManyVoiceChannelInputEnvelope.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithWhereUniqueWithoutVoiceChannelInputObjectSchema } from './MemberUpdateWithWhereUniqueWithoutVoiceChannelInput.schema';
import { MemberUpdateManyWithWhereWithoutVoiceChannelInputObjectSchema } from './MemberUpdateManyWithWhereWithoutVoiceChannelInput.schema';
import { MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUncheckedUpdateManyWithoutVoiceChannelNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              MemberUpsertWithWhereUniqueWithoutVoiceChannelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MemberUpsertWithWhereUniqueWithoutVoiceChannelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MemberCreateManyVoiceChannelInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MemberUpdateWithWhereUniqueWithoutVoiceChannelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MemberUpdateWithWhereUniqueWithoutVoiceChannelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MemberUpdateManyWithWhereWithoutVoiceChannelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MemberUpdateManyWithWhereWithoutVoiceChannelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MemberScalarWhereInputObjectSchema),
          z.lazy(() => MemberScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MemberUncheckedUpdateManyWithoutVoiceChannelNestedInputObjectSchema =
  Schema;
