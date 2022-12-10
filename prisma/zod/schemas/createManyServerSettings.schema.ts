import { z } from 'zod';
import { ServerSettingsCreateManyInputObjectSchema } from './objects/ServerSettingsCreateManyInput.schema';

export const ServerSettingsCreateManySchema = z.object({
  data: ServerSettingsCreateManyInputObjectSchema,
});
