import { z } from 'zod';
import { ActionTypeUpdateInputObjectSchema } from './objects/ActionTypeUpdateInput.schema';
import { ActionTypeWhereUniqueInputObjectSchema } from './objects/ActionTypeWhereUniqueInput.schema';

export const ActionTypeUpdateOneSchema = z.object({
  data: ActionTypeUpdateInputObjectSchema,
  where: ActionTypeWhereUniqueInputObjectSchema,
});
