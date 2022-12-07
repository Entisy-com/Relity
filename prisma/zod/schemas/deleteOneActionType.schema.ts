import { z } from 'zod';
import { ActionTypeWhereUniqueInputObjectSchema } from './objects/ActionTypeWhereUniqueInput.schema';

export const ActionTypeDeleteOneSchema = z.object({
  where: ActionTypeWhereUniqueInputObjectSchema,
});
