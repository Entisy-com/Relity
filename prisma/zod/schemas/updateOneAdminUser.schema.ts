import { z } from 'zod';
import { AdminUserUpdateInputObjectSchema } from './objects/AdminUserUpdateInput.schema';
import { AdminUserWhereUniqueInputObjectSchema } from './objects/AdminUserWhereUniqueInput.schema';

export const AdminUserUpdateOneSchema = z.object({
  data: AdminUserUpdateInputObjectSchema,
  where: AdminUserWhereUniqueInputObjectSchema,
});
