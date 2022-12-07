import { z } from 'zod';
import { AdminUserWhereUniqueInputObjectSchema } from './objects/AdminUserWhereUniqueInput.schema';

export const AdminUserDeleteOneSchema = z.object({
  where: AdminUserWhereUniqueInputObjectSchema,
});
