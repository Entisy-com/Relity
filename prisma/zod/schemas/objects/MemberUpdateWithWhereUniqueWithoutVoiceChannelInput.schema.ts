import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutVoiceChannelInputObjectSchema } from './MemberUpdateWithoutVoiceChannelInput.schema';
import { MemberUncheckedUpdateWithoutVoiceChannelInputObjectSchema } from './MemberUncheckedUpdateWithoutVoiceChannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutVoiceChannelInput> =
  z
    .object({
      where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MemberUpdateWithoutVoiceChannelInputObjectSchema),
        z.lazy(() => MemberUncheckedUpdateWithoutVoiceChannelInputObjectSchema),
      ]),
    })
    .strict();

export const MemberUpdateWithWhereUniqueWithoutVoiceChannelInputObjectSchema =
  Schema;
