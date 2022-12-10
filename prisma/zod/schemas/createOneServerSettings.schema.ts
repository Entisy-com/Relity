import { z } from 'zod';
import { ServerSettingsCreateInputObjectSchema } from './objects/ServerSettingsCreateInput.schema';

export const ServerSettingsCreateOneSchema = z.object({
  data: ServerSettingsCreateInputObjectSchema,
});
