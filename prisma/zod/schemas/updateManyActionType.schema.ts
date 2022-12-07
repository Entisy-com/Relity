import { z } from 'zod';
import { ActionTypeUpdateManyMutationInputObjectSchema } from './objects/ActionTypeUpdateManyMutationInput.schema';
import { ActionTypeWhereInputObjectSchema } from './objects/ActionTypeWhereInput.schema';

export const ActionTypeUpdateManySchema = z.object({
  data: ActionTypeUpdateManyMutationInputObjectSchema,
  where: ActionTypeWhereInputObjectSchema.optional(),
});
