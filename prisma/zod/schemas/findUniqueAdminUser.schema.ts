import { z } from 'zod';
import { AdminUserWhereUniqueInputObjectSchema } from './objects/AdminUserWhereUniqueInput.schema';

export const AdminUserFindUniqueSchema = z.object({
  where: AdminUserWhereUniqueInputObjectSchema,
});
