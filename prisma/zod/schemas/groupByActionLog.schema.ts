import { z } from 'zod';
import { ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';
import { ActionLogOrderByWithAggregationInputObjectSchema } from './objects/ActionLogOrderByWithAggregationInput.schema';
import { ActionLogScalarWhereWithAggregatesInputObjectSchema } from './objects/ActionLogScalarWhereWithAggregatesInput.schema';
import { ActionLogScalarFieldEnumSchema } from './enums/ActionLogScalarFieldEnum.schema';

export const ActionLogGroupBySchema = z.object({
  where: ActionLogWhereInputObjectSchema.optional(),
  orderBy: z.union([
    ActionLogOrderByWithAggregationInputObjectSchema,
    ActionLogOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: ActionLogScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ActionLogScalarFieldEnumSchema),
});
