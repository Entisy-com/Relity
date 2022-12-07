import { z } from 'zod';
import { UserSettingsWhereUniqueInputObjectSchema } from './objects/UserSettingsWhereUniqueInput.schema';

export const UserSettingsFindUniqueSchema = z.object({
  where: UserSettingsWhereUniqueInputObjectSchema,
});
