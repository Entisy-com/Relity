import { z } from 'zod';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelUpdateWithoutCategoryInputObjectSchema } from './VoiceChannelUpdateWithoutCategoryInput.schema';
import { VoiceChannelUncheckedUpdateWithoutCategoryInputObjectSchema } from './VoiceChannelUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => VoiceChannelUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => VoiceChannelUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
