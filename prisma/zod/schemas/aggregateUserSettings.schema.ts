import { z } from 'zod';
import { UserSettingsWhereInputObjectSchema } from './objects/UserSettingsWhereInput.schema';
import { UserSettingsOrderByWithRelationInputObjectSchema } from './objects/UserSettingsOrderByWithRelationInput.schema';
import { UserSettingsWhereUniqueInputObjectSchema } from './objects/UserSettingsWhereUniqueInput.schema';
import { UserSettingsCountAggregateInputObjectSchema } from './objects/UserSettingsCountAggregateInput.schema';
import { UserSettingsMinAggregateInputObjectSchema } from './objects/UserSettingsMinAggregateInput.schema';
import { UserSettingsMaxAggregateInputObjectSchema } from './objects/UserSettingsMaxAggregateInput.schema';

export const UserSettingsAggregateSchema = z.object({
  where: UserSettingsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserSettingsOrderByWithRelationInputObjectSchema,
      UserSettingsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: UserSettingsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), UserSettingsCountAggregateInputObjectSchema])
    .optional(),
  _min: UserSettingsMinAggregateInputObjectSchema.optional(),
  _max: UserSettingsMaxAggregateInputObjectSchema.optional(),
});
