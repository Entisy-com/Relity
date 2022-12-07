import { z } from 'zod';
import { AdminUserWhereInputObjectSchema } from './objects/AdminUserWhereInput.schema';
import { AdminUserOrderByWithRelationInputObjectSchema } from './objects/AdminUserOrderByWithRelationInput.schema';
import { AdminUserWhereUniqueInputObjectSchema } from './objects/AdminUserWhereUniqueInput.schema';
import { AdminUserCountAggregateInputObjectSchema } from './objects/AdminUserCountAggregateInput.schema';
import { AdminUserMinAggregateInputObjectSchema } from './objects/AdminUserMinAggregateInput.schema';
import { AdminUserMaxAggregateInputObjectSchema } from './objects/AdminUserMaxAggregateInput.schema';

export const AdminUserAggregateSchema = z.object({
  where: AdminUserWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AdminUserOrderByWithRelationInputObjectSchema,
      AdminUserOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: AdminUserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), AdminUserCountAggregateInputObjectSchema])
    .optional(),
  _min: AdminUserMinAggregateInputObjectSchema.optional(),
  _max: AdminUserMaxAggregateInputObjectSchema.optional(),
});
