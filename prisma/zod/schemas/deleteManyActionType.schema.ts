import { z } from 'zod';
import { ActionTypeWhereInputObjectSchema } from './objects/ActionTypeWhereInput.schema';

export const ActionTypeDeleteManySchema = z.object({
  where: ActionTypeWhereInputObjectSchema.optional(),
});
