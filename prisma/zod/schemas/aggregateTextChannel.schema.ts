import { z } from 'zod';
import { TextChannelWhereInputObjectSchema } from './objects/TextChannelWhereInput.schema';
import { TextChannelOrderByWithRelationInputObjectSchema } from './objects/TextChannelOrderByWithRelationInput.schema';
import { TextChannelWhereUniqueInputObjectSchema } from './objects/TextChannelWhereUniqueInput.schema';
import { TextChannelCountAggregateInputObjectSchema } from './objects/TextChannelCountAggregateInput.schema';
import { TextChannelMinAggregateInputObjectSchema } from './objects/TextChannelMinAggregateInput.schema';
import { TextChannelMaxAggregateInputObjectSchema } from './objects/TextChannelMaxAggregateInput.schema';
import { TextChannelAvgAggregateInputObjectSchema } from './objects/TextChannelAvgAggregateInput.schema';
import { TextChannelSumAggregateInputObjectSchema } from './objects/TextChannelSumAggregateInput.schema';

export const TextChannelAggregateSchema = z.object({
  where: TextChannelWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TextChannelOrderByWithRelationInputObjectSchema,
      TextChannelOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: TextChannelWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TextChannelCountAggregateInputObjectSchema])
    .optional(),
  _min: TextChannelMinAggregateInputObjectSchema.optional(),
  _max: TextChannelMaxAggregateInputObjectSchema.optional(),
  _avg: TextChannelAvgAggregateInputObjectSchema.optional(),
  _sum: TextChannelSumAggregateInputObjectSchema.optional(),
});
