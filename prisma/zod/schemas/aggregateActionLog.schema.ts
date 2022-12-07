import { z } from 'zod';
import { ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';
import { ActionLogOrderByWithRelationInputObjectSchema } from './objects/ActionLogOrderByWithRelationInput.schema';
import { ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';
import { ActionLogCountAggregateInputObjectSchema } from './objects/ActionLogCountAggregateInput.schema';
import { ActionLogMinAggregateInputObjectSchema } from './objects/ActionLogMinAggregateInput.schema';
import { ActionLogMaxAggregateInputObjectSchema } from './objects/ActionLogMaxAggregateInput.schema';

export const ActionLogAggregateSchema = z.object({
  where: ActionLogWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ActionLogOrderByWithRelationInputObjectSchema,
      ActionLogOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ActionLogWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ActionLogCountAggregateInputObjectSchema])
    .optional(),
  _min: ActionLogMinAggregateInputObjectSchema.optional(),
  _max: ActionLogMaxAggregateInputObjectSchema.optional(),
});
