import { z } from 'zod';
import { UserSettingsCreateInputObjectSchema } from './objects/UserSettingsCreateInput.schema';

export const UserSettingsCreateOneSchema = z.object({
  data: UserSettingsCreateInputObjectSchema,
});
