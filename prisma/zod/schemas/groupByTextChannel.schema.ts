import { z } from 'zod';
import { TextChannelWhereInputObjectSchema } from './objects/TextChannelWhereInput.schema';
import { TextChannelOrderByWithAggregationInputObjectSchema } from './objects/TextChannelOrderByWithAggregationInput.schema';
import { TextChannelScalarWhereWithAggregatesInputObjectSchema } from './objects/TextChannelScalarWhereWithAggregatesInput.schema';
import { TextChannelScalarFieldEnumSchema } from './enums/TextChannelScalarFieldEnum.schema';

export const TextChannelGroupBySchema = z.object({
  where: TextChannelWhereInputObjectSchema.optional(),
  orderBy: z.union([
    TextChannelOrderByWithAggregationInputObjectSchema,
    TextChannelOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: TextChannelScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TextChannelScalarFieldEnumSchema),
});
