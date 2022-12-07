import { z } from 'zod';
import { AdminUserWhereUniqueInputObjectSchema } from './objects/AdminUserWhereUniqueInput.schema';
import { AdminUserCreateInputObjectSchema } from './objects/AdminUserCreateInput.schema';
import { AdminUserUpdateInputObjectSchema } from './objects/AdminUserUpdateInput.schema';

export const AdminUserUpsertSchema = z.object({
  where: AdminUserWhereUniqueInputObjectSchema,
  create: AdminUserCreateInputObjectSchema,
  update: AdminUserUpdateInputObjectSchema,
});
