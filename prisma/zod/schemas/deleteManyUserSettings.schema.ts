import { z } from 'zod';
import { UserSettingsWhereInputObjectSchema } from './objects/UserSettingsWhereInput.schema';

export const UserSettingsDeleteManySchema = z.object({
  where: UserSettingsWhereInputObjectSchema.optional(),
});
