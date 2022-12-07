import { z } from 'zod';
import { UserSettingsWhereUniqueInputObjectSchema } from './objects/UserSettingsWhereUniqueInput.schema';
import { UserSettingsCreateInputObjectSchema } from './objects/UserSettingsCreateInput.schema';
import { UserSettingsUpdateInputObjectSchema } from './objects/UserSettingsUpdateInput.schema';

export const UserSettingsUpsertSchema = z.object({
  where: UserSettingsWhereUniqueInputObjectSchema,
  create: UserSettingsCreateInputObjectSchema,
  update: UserSettingsUpdateInputObjectSchema,
});
