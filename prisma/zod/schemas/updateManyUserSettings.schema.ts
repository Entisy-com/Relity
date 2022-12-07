import { z } from 'zod';
import { UserSettingsUpdateManyMutationInputObjectSchema } from './objects/UserSettingsUpdateManyMutationInput.schema';
import { UserSettingsWhereInputObjectSchema } from './objects/UserSettingsWhereInput.schema';

export const UserSettingsUpdateManySchema = z.object({
  data: UserSettingsUpdateManyMutationInputObjectSchema,
  where: UserSettingsWhereInputObjectSchema.optional(),
});
