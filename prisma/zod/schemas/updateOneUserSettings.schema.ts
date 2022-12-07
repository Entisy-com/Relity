import { z } from 'zod';
import { UserSettingsUpdateInputObjectSchema } from './objects/UserSettingsUpdateInput.schema';
import { UserSettingsWhereUniqueInputObjectSchema } from './objects/UserSettingsWhereUniqueInput.schema';

export const UserSettingsUpdateOneSchema = z.object({
  data: UserSettingsUpdateInputObjectSchema,
  where: UserSettingsWhereUniqueInputObjectSchema,
});
