import { z } from 'zod';
import { ActionLogCreateInputObjectSchema } from './objects/ActionLogCreateInput.schema';

export const ActionLogCreateOneSchema = z.object({
  data: ActionLogCreateInputObjectSchema,
});
