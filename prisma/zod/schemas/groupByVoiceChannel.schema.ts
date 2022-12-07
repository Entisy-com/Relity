import { z } from 'zod';
import { VoiceChannelWhereInputObjectSchema } from './objects/VoiceChannelWhereInput.schema';
import { VoiceChannelOrderByWithAggregationInputObjectSchema } from './objects/VoiceChannelOrderByWithAggregationInput.schema';
import { VoiceChannelScalarWhereWithAggregatesInputObjectSchema } from './objects/VoiceChannelScalarWhereWithAggregatesInput.schema';
import { VoiceChannelScalarFieldEnumSchema } from './enums/VoiceChannelScalarFieldEnum.schema';

export const VoiceChannelGroupBySchema = z.object({
  where: VoiceChannelWhereInputObjectSchema.optional(),
  orderBy: z.union([
    VoiceChannelOrderByWithAggregationInputObjectSchema,
    VoiceChannelOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: VoiceChannelScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VoiceChannelScalarFieldEnumSchema),
});
