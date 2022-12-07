import { z } from 'zod';
import { MessageWhereInputObjectSchema } from './objects/MessageWhereInput.schema';
import { MessageOrderByWithRelationInputObjectSchema } from './objects/MessageOrderByWithRelationInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';
import { MessageCountAggregateInputObjectSchema } from './objects/MessageCountAggregateInput.schema';
import { MessageMinAggregateInputObjectSchema } from './objects/MessageMinAggregateInput.schema';
import { MessageMaxAggregateInputObjectSchema } from './objects/MessageMaxAggregateInput.schema';

export const MessageAggregateSchema = z.object({
  where: MessageWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MessageOrderByWithRelationInputObjectSchema,
      MessageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: MessageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MessageCountAggregateInputObjectSchema])
    .optional(),
  _min: MessageMinAggregateInputObjectSchema.optional(),
  _max: MessageMaxAggregateInputObjectSchema.optional(),
});