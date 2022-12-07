import { z } from 'zod';
import { AdminUserCreateInputObjectSchema } from './objects/AdminUserCreateInput.schema';

export const AdminUserCreateOneSchema = z.object({
  data: AdminUserCreateInputObjectSchema,
});
