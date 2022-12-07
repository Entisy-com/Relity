import { z } from 'zod';
import { ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';
import { ActionLogCreateInputObjectSchema } from './objects/ActionLogCreateInput.schema';
import { ActionLogUpdateInputObjectSchema } from './objects/ActionLogUpdateInput.schema';

export const ActionLogUpsertSchema = z.object({
  where: ActionLogWhereUniqueInputObjectSchema,
  create: ActionLogCreateInputObjectSchema,
  update: ActionLogUpdateInputObjectSchema,
});
