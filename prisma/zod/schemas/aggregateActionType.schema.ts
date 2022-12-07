import { z } from 'zod';
import { ActionTypeWhereInputObjectSchema } from './objects/ActionTypeWhereInput.schema';
import { ActionTypeOrderByWithRelationInputObjectSchema } from './objects/ActionTypeOrderByWithRelationInput.schema';
import { ActionTypeWhereUniqueInputObjectSchema } from './objects/ActionTypeWhereUniqueInput.schema';
import { ActionTypeCountAggregateInputObjectSchema } from './objects/ActionTypeCountAggregateInput.schema';
import { ActionTypeMinAggregateInputObjectSchema } from './objects/ActionTypeMinAggregateInput.schema';
import { ActionTypeMaxAggregateInputObjectSchema } from './objects/ActionTypeMaxAggregateInput.schema';

export const ActionTypeAggregateSchema = z.object({
  where: ActionTypeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ActionTypeOrderByWithRelationInputObjectSchema,
      ActionTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ActionTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ActionTypeCountAggregateInputObjectSchema])
    .optional(),
  _min: ActionTypeMinAggregateInputObjectSchema.optional(),
  _max: ActionTypeMaxAggregateInputObjectSchema.optional(),
});
