import { z } from 'zod';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelUpdateWithoutServerInputObjectSchema } from './VoiceChannelUpdateWithoutServerInput.schema';
import { VoiceChannelUncheckedUpdateWithoutServerInputObjectSchema } from './VoiceChannelUncheckedUpdateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpdateWithWhereUniqueWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => VoiceChannelUpdateWithoutServerInputObjectSchema),
        z.lazy(() => VoiceChannelUncheckedUpdateWithoutServerInputObjectSchema),
      ]),
    })
    .strict();

export const VoiceChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema =
  Schema;
