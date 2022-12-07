import { z } from 'zod';
import { ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';
import { ActionLogOrderByWithRelationInputObjectSchema } from './objects/ActionLogOrderByWithRelationInput.schema';
import { ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';
import { ActionLogScalarFieldEnumSchema } from './enums/ActionLogScalarFieldEnum.schema';

export const ActionLogFindFirstSchema = z.object({
  where: ActionLogWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ActionLogOrderByWithRelationInputObjectSchema,
      ActionLogOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ActionLogWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ActionLogScalarFieldEnumSchema).optional(),
});
