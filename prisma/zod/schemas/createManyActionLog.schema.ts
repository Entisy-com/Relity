import { z } from 'zod';
import { ActionLogCreateManyInputObjectSchema } from './objects/ActionLogCreateManyInput.schema';

export const ActionLogCreateManySchema = z.object({
  data: ActionLogCreateManyInputObjectSchema,
});
