import { z } from 'zod';
import { AdminUserCreateManyInputObjectSchema } from './objects/AdminUserCreateManyInput.schema';

export const AdminUserCreateManySchema = z.object({
  data: AdminUserCreateManyInputObjectSchema,
});
