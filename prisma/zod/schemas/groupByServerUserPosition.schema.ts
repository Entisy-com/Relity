import { z } from 'zod';
import { ServerUserPositionWhereInputObjectSchema } from './objects/ServerUserPositionWhereInput.schema';
import { ServerUserPositionOrderByWithAggregationInputObjectSchema } from './objects/ServerUserPositionOrderByWithAggregationInput.schema';
import { ServerUserPositionScalarWhereWithAggregatesInputObjectSchema } from './objects/ServerUserPositionScalarWhereWithAggregatesInput.schema';
import { ServerUserPositionScalarFieldEnumSchema } from './enums/ServerUserPositionScalarFieldEnum.schema';

export const ServerUserPositionGroupBySchema = z.object({
  where: ServerUserPositionWhereInputObjectSchema.optional(),
  orderBy: z.union([
    ServerUserPositionOrderByWithAggregationInputObjectSchema,
    ServerUserPositionOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having:
    ServerUserPositionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ServerUserPositionScalarFieldEnumSchema),
});
