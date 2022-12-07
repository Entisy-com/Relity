import { z } from 'zod';
import { VoiceChannelScalarWhereInputObjectSchema } from './VoiceChannelScalarWhereInput.schema';
import { VoiceChannelUpdateManyMutationInputObjectSchema } from './VoiceChannelUpdateManyMutationInput.schema';
import { VoiceChannelUncheckedUpdateManyWithoutVoicechannelsInputObjectSchema } from './VoiceChannelUncheckedUpdateManyWithoutVoicechannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => VoiceChannelScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => VoiceChannelUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            VoiceChannelUncheckedUpdateManyWithoutVoicechannelsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema =
  Schema;
