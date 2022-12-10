import { z } from 'zod';
import { ServerSettingsWhereUniqueInputObjectSchema } from './objects/ServerSettingsWhereUniqueInput.schema';
import { ServerSettingsCreateInputObjectSchema } from './objects/ServerSettingsCreateInput.schema';
import { ServerSettingsUpdateInputObjectSchema } from './objects/ServerSettingsUpdateInput.schema';

export const ServerSettingsUpsertSchema = z.object({
  where: ServerSettingsWhereUniqueInputObjectSchema,
  create: ServerSettingsCreateInputObjectSchema,
  update: ServerSettingsUpdateInputObjectSchema,
});
