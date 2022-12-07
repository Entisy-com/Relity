import { z } from 'zod';
import { VoiceChannelWhereUniqueInputObjectSchema } from './objects/VoiceChannelWhereUniqueInput.schema';

export const VoiceChannelDeleteOneSchema = z.object({
  where: VoiceChannelWhereUniqueInputObjectSchema,
});
