import { z } from 'zod';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelCreateWithoutCategoryInputObjectSchema } from './VoiceChannelCreateWithoutCategoryInput.schema';
import { VoiceChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelCreateOrConnectWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => VoiceChannelCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => VoiceChannelUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceChannelCreateOrConnectWithoutCategoryInputObjectSchema =
  Schema;
