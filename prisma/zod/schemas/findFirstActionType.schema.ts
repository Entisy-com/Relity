import { z } from 'zod';
import { ActionTypeWhereInputObjectSchema } from './objects/ActionTypeWhereInput.schema';
import { ActionTypeOrderByWithRelationInputObjectSchema } from './objects/ActionTypeOrderByWithRelationInput.schema';
import { ActionTypeWhereUniqueInputObjectSchema } from './objects/ActionTypeWhereUniqueInput.schema';
import { ActionTypeScalarFieldEnumSchema } from './enums/ActionTypeScalarFieldEnum.schema';

export const ActionTypeFindFirstSchema = z.object({
  where: ActionTypeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ActionTypeOrderByWithRelationInputObjectSchema,
      ActionTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ActionTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ActionTypeScalarFieldEnumSchema).optional(),
});
