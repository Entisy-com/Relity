import { z } from 'zod';
import { VoiceChannelScalarWhereInputObjectSchema } from './VoiceChannelScalarWhereInput.schema';
import { VoiceChannelUpdateManyMutationInputObjectSchema } from './VoiceChannelUpdateManyMutationInput.schema';
import { VoiceChannelUncheckedUpdateManyWithoutVoicechannelInputObjectSchema } from './VoiceChannelUncheckedUpdateManyWithoutVoicechannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpdateManyWithWhereWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => VoiceChannelScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => VoiceChannelUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            VoiceChannelUncheckedUpdateManyWithoutVoicechannelInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceChannelUpdateManyWithWhereWithoutServerInputObjectSchema =
  Schema;
