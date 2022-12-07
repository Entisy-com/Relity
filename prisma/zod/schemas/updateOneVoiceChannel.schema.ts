import { z } from 'zod';
import { VoiceChannelUpdateInputObjectSchema } from './objects/VoiceChannelUpdateInput.schema';
import { VoiceChannelWhereUniqueInputObjectSchema } from './objects/VoiceChannelWhereUniqueInput.schema';

export const VoiceChannelUpdateOneSchema = z.object({
  data: VoiceChannelUpdateInputObjectSchema,
  where: VoiceChannelWhereUniqueInputObjectSchema,
});
