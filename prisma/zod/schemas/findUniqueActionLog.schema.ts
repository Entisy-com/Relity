import { z } from 'zod';
import { ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';

export const ActionLogFindUniqueSchema = z.object({
  where: ActionLogWhereUniqueInputObjectSchema,
});
