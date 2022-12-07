import { z } from 'zod';
import { AdminUserWhereInputObjectSchema } from './objects/AdminUserWhereInput.schema';
import { AdminUserOrderByWithRelationInputObjectSchema } from './objects/AdminUserOrderByWithRelationInput.schema';
import { AdminUserWhereUniqueInputObjectSchema } from './objects/AdminUserWhereUniqueInput.schema';
import { AdminUserScalarFieldEnumSchema } from './enums/AdminUserScalarFieldEnum.schema';

export const AdminUserFindFirstSchema = z.object({
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
  distinct: z.array(AdminUserScalarFieldEnumSchema).optional(),
});
