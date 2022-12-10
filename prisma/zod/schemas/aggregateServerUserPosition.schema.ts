import { z } from 'zod';
import { ServerUserPositionWhereInputObjectSchema } from './objects/ServerUserPositionWhereInput.schema';
import { ServerUserPositionOrderByWithRelationInputObjectSchema } from './objects/ServerUserPositionOrderByWithRelationInput.schema';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './objects/ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionCountAggregateInputObjectSchema } from './objects/ServerUserPositionCountAggregateInput.schema';
import { ServerUserPositionMinAggregateInputObjectSchema } from './objects/ServerUserPositionMinAggregateInput.schema';
import { ServerUserPositionMaxAggregateInputObjectSchema } from './objects/ServerUserPositionMaxAggregateInput.schema';
import { ServerUserPositionAvgAggregateInputObjectSchema } from './objects/ServerUserPositionAvgAggregateInput.schema';
import { ServerUserPositionSumAggregateInputObjectSchema } from './objects/ServerUserPositionSumAggregateInput.schema';

export const ServerUserPositionAggregateSchema = z.object({
  where: ServerUserPositionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ServerUserPositionOrderByWithRelationInputObjectSchema,
      ServerUserPositionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ServerUserPositionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ServerUserPositionCountAggregateInputObjectSchema])
    .optional(),
  _min: ServerUserPositionMinAggregateInputObjectSchema.optional(),
  _max: ServerUserPositionMaxAggregateInputObjectSchema.optional(),
  _avg: ServerUserPositionAvgAggregateInputObjectSchema.optional(),
  _sum: ServerUserPositionSumAggregateInputObjectSchema.optional(),
});
