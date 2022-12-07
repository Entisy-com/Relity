import { z } from 'zod';
import { AdminUserWhereInputObjectSchema } from './objects/AdminUserWhereInput.schema';

export const AdminUserDeleteManySchema = z.object({
  where: AdminUserWhereInputObjectSchema.optional(),
});
