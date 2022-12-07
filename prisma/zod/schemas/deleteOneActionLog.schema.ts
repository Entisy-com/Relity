import { z } from 'zod';
import { ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';

export const ActionLogDeleteOneSchema = z.object({
  where: ActionLogWhereUniqueInputObjectSchema,
});
