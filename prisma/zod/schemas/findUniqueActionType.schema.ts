import { z } from 'zod';
import { ActionTypeWhereUniqueInputObjectSchema } from './objects/ActionTypeWhereUniqueInput.schema';

export const ActionTypeFindUniqueSchema = z.object({
  where: ActionTypeWhereUniqueInputObjectSchema,
});
