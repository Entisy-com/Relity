import { z } from 'zod';
import { AdminUserWhereInputObjectSchema } from './objects/AdminUserWhereInput.schema';
import { AdminUserOrderByWithAggregationInputObjectSchema } from './objects/AdminUserOrderByWithAggregationInput.schema';
import { AdminUserScalarWhereWithAggregatesInputObjectSchema } from './objects/AdminUserScalarWhereWithAggregatesInput.schema';
import { AdminUserScalarFieldEnumSchema } from './enums/AdminUserScalarFieldEnum.schema';

export const AdminUserGroupBySchema = z.object({
  where: AdminUserWhereInputObjectSchema.optional(),
  orderBy: z.union([
    AdminUserOrderByWithAggregationInputObjectSchema,
    AdminUserOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: AdminUserScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AdminUserScalarFieldEnumSchema),
});
