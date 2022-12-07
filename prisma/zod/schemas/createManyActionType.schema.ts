import { z } from 'zod';
import { ActionTypeCreateManyInputObjectSchema } from './objects/ActionTypeCreateManyInput.schema';

export const ActionTypeCreateManySchema = z.object({
  data: ActionTypeCreateManyInputObjectSchema,
});
