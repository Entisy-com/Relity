import { z } from 'zod';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelUpdateWithoutServerInputObjectSchema } from './VoiceChannelUpdateWithoutServerInput.schema';
import { VoiceChannelUncheckedUpdateWithoutServerInputObjectSchema } from './VoiceChannelUncheckedUpdateWithoutServerInput.schema';
import { VoiceChannelCreateWithoutServerInputObjectSchema } from './VoiceChannelCreateWithoutServerInput.schema';
import { VoiceChannelUncheckedCreateWithoutServerInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpsertWithWhereUniqueWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => VoiceChannelUpdateWithoutServerInputObjectSchema),
        z.lazy(() => VoiceChannelUncheckedUpdateWithoutServerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => VoiceChannelCreateWithoutServerInputObjectSchema),
        z.lazy(() => VoiceChannelUncheckedCreateWithoutServerInputObjectSchema),
      ]),
    })
    .strict();

export const VoiceChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema =
  Schema;
