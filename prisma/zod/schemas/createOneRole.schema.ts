import { z } from 'zod';
import { RoleCreateInputObjectSchema } from './objects/RoleCreateInput.schema';

export const RoleCreateOneSchema = z.object({
  data: RoleCreateInputObjectSchema,
});
