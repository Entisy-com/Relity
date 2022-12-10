import { z } from 'zod';
import { ServerSettingsWhereInputObjectSchema } from './objects/ServerSettingsWhereInput.schema';
import { ServerSettingsOrderByWithAggregationInputObjectSchema } from './objects/ServerSettingsOrderByWithAggregationInput.schema';
import { ServerSettingsScalarWhereWithAggregatesInputObjectSchema } from './objects/ServerSettingsScalarWhereWithAggregatesInput.schema';
import { ServerSettingsScalarFieldEnumSchema } from './enums/ServerSettingsScalarFieldEnum.schema';

export const ServerSettingsGroupBySchema = z.object({
  where: ServerSettingsWhereInputObjectSchema.optional(),
  orderBy: z.union([
    ServerSettingsOrderByWithAggregationInputObjectSchema,
    ServerSettingsOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: ServerSettingsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ServerSettingsScalarFieldEnumSchema),
});
