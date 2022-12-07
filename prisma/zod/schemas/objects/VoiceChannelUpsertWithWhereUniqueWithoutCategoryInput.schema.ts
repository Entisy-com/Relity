import { z } from 'zod';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelUpdateWithoutCategoryInputObjectSchema } from './VoiceChannelUpdateWithoutCategoryInput.schema';
import { VoiceChannelUncheckedUpdateWithoutCategoryInputObjectSchema } from './VoiceChannelUncheckedUpdateWithoutCategoryInput.schema';
import { VoiceChannelCreateWithoutCategoryInputObjectSchema } from './VoiceChannelCreateWithoutCategoryInput.schema';
import { VoiceChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => VoiceChannelWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => VoiceChannelUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => VoiceChannelUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => VoiceChannelCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => VoiceChannelUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
