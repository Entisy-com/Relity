import { z } from 'zod';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelCreateWithoutMembersInputObjectSchema } from './VoiceChannelCreateWithoutMembersInput.schema';
import { VoiceChannelUncheckedCreateWithoutMembersInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelCreateOrConnectWithoutMembersInput> =
  z
    .object({
      where: z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => VoiceChannelCreateWithoutMembersInputObjectSchema),
        z.lazy(
          () => VoiceChannelUncheckedCreateWithoutMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceChannelCreateOrConnectWithoutMembersInputObjectSchema =
  Schema;
