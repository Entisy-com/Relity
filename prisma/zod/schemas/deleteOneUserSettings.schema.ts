import { z } from 'zod';
import { UserSettingsWhereUniqueInputObjectSchema } from './objects/UserSettingsWhereUniqueInput.schema';

export const UserSettingsDeleteOneSchema = z.object({
  where: UserSettingsWhereUniqueInputObjectSchema,
});
