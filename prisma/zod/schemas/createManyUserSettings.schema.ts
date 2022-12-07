import { z } from 'zod';
import { UserSettingsCreateManyInputObjectSchema } from './objects/UserSettingsCreateManyInput.schema';

export const UserSettingsCreateManySchema = z.object({
  data: UserSettingsCreateManyInputObjectSchema,
});
