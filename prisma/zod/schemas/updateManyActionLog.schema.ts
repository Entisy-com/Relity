import { z } from 'zod';
import { ActionLogUpdateManyMutationInputObjectSchema } from './objects/ActionLogUpdateManyMutationInput.schema';
import { ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';

export const ActionLogUpdateManySchema = z.object({
  data: ActionLogUpdateManyMutationInputObjectSchema,
  where: ActionLogWhereInputObjectSchema.optional(),
});
