import { z } from 'zod';
import { ActionTypeCreateInputObjectSchema } from './objects/ActionTypeCreateInput.schema';

export const ActionTypeCreateOneSchema = z.object({
  data: ActionTypeCreateInputObjectSchema,
});
