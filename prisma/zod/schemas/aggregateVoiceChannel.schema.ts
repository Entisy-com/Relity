import { z } from 'zod';
import { VoiceChannelWhereInputObjectSchema } from './objects/VoiceChannelWhereInput.schema';
import { VoiceChannelOrderByWithRelationInputObjectSchema } from './objects/VoiceChannelOrderByWithRelationInput.schema';
import { VoiceChannelWhereUniqueInputObjectSchema } from './objects/VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelCountAggregateInputObjectSchema } from './objects/VoiceChannelCountAggregateInput.schema';
import { VoiceChannelMinAggregateInputObjectSchema } from './objects/VoiceChannelMinAggregateInput.schema';
import { VoiceChannelMaxAggregateInputObjectSchema } from './objects/VoiceChannelMaxAggregateInput.schema';
import { VoiceChannelAvgAggregateInputObjectSchema } from './objects/VoiceChannelAvgAggregateInput.schema';
import { VoiceChannelSumAggregateInputObjectSchema } from './objects/VoiceChannelSumAggregateInput.schema';

export const VoiceChannelAggregateSchema = z.object({
  where: VoiceChannelWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VoiceChannelOrderByWithRelationInputObjectSchema,
      VoiceChannelOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: VoiceChannelWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), VoiceChannelCountAggregateInputObjectSchema])
    .optional(),
  _min: VoiceChannelMinAggregateInputObjectSchema.optional(),
  _max: VoiceChannelMaxAggregateInputObjectSchema.optional(),
  _avg: VoiceChannelAvgAggregateInputObjectSchema.optional(),
  _sum: VoiceChannelSumAggregateInputObjectSchema.optional(),
});
