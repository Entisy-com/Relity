import { z } from 'zod';
import { ActionLogUpdateInputObjectSchema } from './objects/ActionLogUpdateInput.schema';
import { ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';

export const ActionLogUpdateOneSchema = z.object({
  data: ActionLogUpdateInputObjectSchema,
  where: ActionLogWhereUniqueInputObjectSchema,
});
