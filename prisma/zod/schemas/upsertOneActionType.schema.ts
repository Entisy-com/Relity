import { z } from 'zod';
import { ActionTypeWhereUniqueInputObjectSchema } from './objects/ActionTypeWhereUniqueInput.schema';
import { ActionTypeCreateInputObjectSchema } from './objects/ActionTypeCreateInput.schema';
import { ActionTypeUpdateInputObjectSchema } from './objects/ActionTypeUpdateInput.schema';

export const ActionTypeUpsertSchema = z.object({
  where: ActionTypeWhereUniqueInputObjectSchema,
  create: ActionTypeCreateInputObjectSchema,
  update: ActionTypeUpdateInputObjectSchema,
});
