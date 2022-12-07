import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutVoiceChannelInputObjectSchema } from './MemberCreateWithoutVoiceChannelInput.schema';
import { MemberUncheckedCreateWithoutVoiceChannelInputObjectSchema } from './MemberUncheckedCreateWithoutVoiceChannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateOrConnectWithoutVoiceChannelInput> =
  z
    .object({
      where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MemberCreateWithoutVoiceChannelInputObjectSchema),
        z.lazy(() => MemberUncheckedCreateWithoutVoiceChannelInputObjectSchema),
      ]),
    })
    .strict();

export const MemberCreateOrConnectWithoutVoiceChannelInputObjectSchema = Schema;
