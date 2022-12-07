import { z } from 'zod';
import { UserSettingsWhereInputObjectSchema } from './objects/UserSettingsWhereInput.schema';
import { UserSettingsOrderByWithAggregationInputObjectSchema } from './objects/UserSettingsOrderByWithAggregationInput.schema';
import { UserSettingsScalarWhereWithAggregatesInputObjectSchema } from './objects/UserSettingsScalarWhereWithAggregatesInput.schema';
import { UserSettingsScalarFieldEnumSchema } from './enums/UserSettingsScalarFieldEnum.schema';

export const UserSettingsGroupBySchema = z.object({
  where: UserSettingsWhereInputObjectSchema.optional(),
  orderBy: z.union([
    UserSettingsOrderByWithAggregationInputObjectSchema,
    UserSettingsOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: UserSettingsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserSettingsScalarFieldEnumSchema),
});
