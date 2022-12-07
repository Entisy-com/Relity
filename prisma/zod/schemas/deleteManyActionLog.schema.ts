import { z } from 'zod';
import { ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';

export const ActionLogDeleteManySchema = z.object({
  where: ActionLogWhereInputObjectSchema.optional(),
});
