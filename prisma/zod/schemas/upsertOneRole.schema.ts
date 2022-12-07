import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';
import { RoleCreateInputObjectSchema } from './objects/RoleCreateInput.schema';
import { RoleUpdateInputObjectSchema } from './objects/RoleUpdateInput.schema';

export const RoleUpsertSchema = z.object({
  where: RoleWhereUniqueInputObjectSchema,
  create: RoleCreateInputObjectSchema,
  update: RoleUpdateInputObjectSchema,
});
