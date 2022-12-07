import { z } from 'zod';
import { VoiceChannelWhereUniqueInputObjectSchema } from './objects/VoiceChannelWhereUniqueInput.schema';

export const VoiceChannelFindUniqueSchema = z.object({
  where: VoiceChannelWhereUniqueInputObjectSchema,
});
