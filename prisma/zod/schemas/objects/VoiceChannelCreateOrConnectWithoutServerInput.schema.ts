import { z } from 'zod';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelCreateWithoutServerInputObjectSchema } from './VoiceChannelCreateWithoutServerInput.schema';
import { VoiceChannelUncheckedCreateWithoutServerInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelCreateOrConnectWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => VoiceChannelCreateWithoutServerInputObjectSchema),
        z.lazy(() => VoiceChannelUncheckedCreateWithoutServerInputObjectSchema),
      ]),
    })
    .strict();

export const VoiceChannelCreateOrConnectWithoutServerInputObjectSchema = Schema;
