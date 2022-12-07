import { z } from 'zod';
import { VoiceChannelUpdateWithoutMembersInputObjectSchema } from './VoiceChannelUpdateWithoutMembersInput.schema';
import { VoiceChannelUncheckedUpdateWithoutMembersInputObjectSchema } from './VoiceChannelUncheckedUpdateWithoutMembersInput.schema';
import { VoiceChannelCreateWithoutMembersInputObjectSchema } from './VoiceChannelCreateWithoutMembersInput.schema';
import { VoiceChannelUncheckedCreateWithoutMembersInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpsertWithoutMembersInput> = z
  .object({
    update: z.union([
      z.lazy(() => VoiceChannelUpdateWithoutMembersInputObjectSchema),
      z.lazy(() => VoiceChannelUncheckedUpdateWithoutMembersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VoiceChannelCreateWithoutMembersInputObjectSchema),
      z.lazy(() => VoiceChannelUncheckedCreateWithoutMembersInputObjectSchema),
    ]),
  })
  .strict();

export const VoiceChannelUpsertWithoutMembersInputObjectSchema = Schema;
