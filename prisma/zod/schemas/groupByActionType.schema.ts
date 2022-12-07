import { z } from 'zod';
import { ActionTypeWhereInputObjectSchema } from './objects/ActionTypeWhereInput.schema';
import { ActionTypeOrderByWithAggregationInputObjectSchema } from './objects/ActionTypeOrderByWithAggregationInput.schema';
import { ActionTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/ActionTypeScalarWhereWithAggregatesInput.schema';
import { ActionTypeScalarFieldEnumSchema } from './enums/ActionTypeScalarFieldEnum.schema';

export const ActionTypeGroupBySchema = z.object({
  where: ActionTypeWhereInputObjectSchema.optional(),
  orderBy: z.union([
    ActionTypeOrderByWithAggregationInputObjectSchema,
    ActionTypeOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: ActionTypeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ActionTypeScalarFieldEnumSchema),
});
