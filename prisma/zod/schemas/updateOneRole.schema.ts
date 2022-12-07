import { z } from 'zod';
import { RoleUpdateInputObjectSchema } from './objects/RoleUpdateInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';

export const RoleUpdateOneSchema = z.object({
  data: RoleUpdateInputObjectSchema,
  where: RoleWhereUniqueInputObjectSchema,
});
