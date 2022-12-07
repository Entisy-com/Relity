import { z } from 'zod';
import { VoiceChannelCreateInputObjectSchema } from './objects/VoiceChannelCreateInput.schema';

export const VoiceChannelCreateOneSchema = z.object({
  data: VoiceChannelCreateInputObjectSchema,
});
