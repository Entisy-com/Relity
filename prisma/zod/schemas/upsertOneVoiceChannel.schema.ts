import { z } from 'zod';
import { VoiceChannelWhereUniqueInputObjectSchema } from './objects/VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelCreateInputObjectSchema } from './objects/VoiceChannelCreateInput.schema';
import { VoiceChannelUpdateInputObjectSchema } from './objects/VoiceChannelUpdateInput.schema';

export const VoiceChannelUpsertSchema = z.object({
  where: VoiceChannelWhereUniqueInputObjectSchema,
  create: VoiceChannelCreateInputObjectSchema,
  update: VoiceChannelUpdateInputObjectSchema,
});
