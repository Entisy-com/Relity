import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutVoiceChannelInputObjectSchema } from './MemberUpdateWithoutVoiceChannelInput.schema';
import { MemberUncheckedUpdateWithoutVoiceChannelInputObjectSchema } from './MemberUncheckedUpdateWithoutVoiceChannelInput.schema';
import { MemberCreateWithoutVoiceChannelInputObjectSchema } from './MemberCreateWithoutVoiceChannelInput.schema';
import { MemberUncheckedCreateWithoutVoiceChannelInputObjectSchema } from './MemberUncheckedCreateWithoutVoiceChannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutVoiceChannelInput> =
  z
    .object({
      where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MemberUpdateWithoutVoiceChannelInputObjectSchema),
        z.lazy(() => MemberUncheckedUpdateWithoutVoiceChannelInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MemberCreateWithoutVoiceChannelInputObjectSchema),
        z.lazy(() => MemberUncheckedCreateWithoutVoiceChannelInputObjectSchema),
      ]),
    })
    .strict();

export const MemberUpsertWithWhereUniqueWithoutVoiceChannelInputObjectSchema =
  Schema;
