import { z } from 'zod';
import { ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';
import { ServerOrderByWithRelationInputObjectSchema } from './objects/ServerOrderByWithRelationInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';
import { ServerCountAggregateInputObjectSchema } from './objects/ServerCountAggregateInput.schema';
import { ServerMinAggregateInputObjectSchema } from './objects/ServerMinAggregateInput.schema';
import { ServerMaxAggregateInputObjectSchema } from './objects/ServerMaxAggregateInput.schema';

export const ServerAggregateSchema = z.object({
  where: ServerWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ServerOrderByWithRelationInputObjectSchema,
      ServerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ServerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ServerCountAggregateInputObjectSchema])
    .optional(),
  _min: ServerMinAggregateInputObjectSchema.optional(),
  _max: ServerMaxAggregateInputObjectSchema.optional(),
});
