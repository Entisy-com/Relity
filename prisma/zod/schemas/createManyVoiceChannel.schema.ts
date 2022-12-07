import { z } from 'zod';
import { VoiceChannelCreateManyInputObjectSchema } from './objects/VoiceChannelCreateManyInput.schema';

export const VoiceChannelCreateManySchema = z.object({
  data: VoiceChannelCreateManyInputObjectSchema,
});
