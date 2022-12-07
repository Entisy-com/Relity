import { z } from 'zod';
import { VoiceChannelUpdateManyMutationInputObjectSchema } from './objects/VoiceChannelUpdateManyMutationInput.schema';
import { VoiceChannelWhereInputObjectSchema } from './objects/VoiceChannelWhereInput.schema';

export const VoiceChannelUpdateManySchema = z.object({
  data: VoiceChannelUpdateManyMutationInputObjectSchema,
  where: VoiceChannelWhereInputObjectSchema.optional(),
});
