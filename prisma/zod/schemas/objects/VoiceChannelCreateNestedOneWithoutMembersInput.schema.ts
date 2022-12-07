import { z } from 'zod';
import { VoiceChannelCreateWithoutMembersInputObjectSchema } from './VoiceChannelCreateWithoutMembersInput.schema';
import { VoiceChannelUncheckedCreateWithoutMembersInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutMembersInput.schema';
import { VoiceChannelCreateOrConnectWithoutMembersInputObjectSchema } from './VoiceChannelCreateOrConnectWithoutMembersInput.schema';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelCreateNestedOneWithoutMembersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => VoiceChannelCreateWithoutMembersInputObjectSchema),
          z.lazy(
            () => VoiceChannelUncheckedCreateWithoutMembersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => VoiceChannelCreateOrConnectWithoutMembersInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => VoiceChannelWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const VoiceChannelCreateNestedOneWithoutMembersInputObjectSchema =
  Schema;
