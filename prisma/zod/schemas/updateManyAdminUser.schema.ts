import { z } from 'zod';
import { AdminUserUpdateManyMutationInputObjectSchema } from './objects/AdminUserUpdateManyMutationInput.schema';
import { AdminUserWhereInputObjectSchema } from './objects/AdminUserWhereInput.schema';

export const AdminUserUpdateManySchema = z.object({
  data: AdminUserUpdateManyMutationInputObjectSchema,
  where: AdminUserWhereInputObjectSchema.optional(),
});
