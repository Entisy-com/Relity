import { z } from 'zod';
import { VoiceChannelWhereInputObjectSchema } from './objects/VoiceChannelWhereInput.schema';

export const VoiceChannelDeleteManySchema = z.object({
  where: VoiceChannelWhereInputObjectSchema.optional(),
});
