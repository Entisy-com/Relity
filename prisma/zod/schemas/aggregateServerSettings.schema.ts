import { z } from 'zod';
import { ServerSettingsWhereInputObjectSchema } from './objects/ServerSettingsWhereInput.schema';
import { ServerSettingsOrderByWithRelationInputObjectSchema } from './objects/ServerSettingsOrderByWithRelationInput.schema';
import { ServerSettingsWhereUniqueInputObjectSchema } from './objects/ServerSettingsWhereUniqueInput.schema';
import { ServerSettingsCountAggregateInputObjectSchema } from './objects/ServerSettingsCountAggregateInput.schema';
import { ServerSettingsMinAggregateInputObjectSchema } from './objects/ServerSettingsMinAggregateInput.schema';
import { ServerSettingsMaxAggregateInputObjectSchema } from './objects/ServerSettingsMaxAggregateInput.schema';

export const ServerSettingsAggregateSchema = z.object({
  where: ServerSettingsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ServerSettingsOrderByWithRelationInputObjectSchema,
      ServerSettingsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ServerSettingsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ServerSettingsCountAggregateInputObjectSchema])
    .optional(),
  _min: ServerSettingsMinAggregateInputObjectSchema.optional(),
  _max: ServerSettingsMaxAggregateInputObjectSchema.optional(),
});
