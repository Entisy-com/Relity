import { z } from 'zod';
import { UserSettingsWhereInputObjectSchema } from './objects/UserSettingsWhereInput.schema';
import { UserSettingsOrderByWithRelationInputObjectSchema } from './objects/UserSettingsOrderByWithRelationInput.schema';
import { UserSettingsWhereUniqueInputObjectSchema } from './objects/UserSettingsWhereUniqueInput.schema';
import { UserSettingsScalarFieldEnumSchema } from './enums/UserSettingsScalarFieldEnum.schema';

export const UserSettingsFindManySchema = z.object({
  where: UserSettingsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserSettingsOrderByWithRelationInputObjectSchema,
      UserSettingsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: UserSettingsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserSettingsScalarFieldEnumSchema).optional(),
});
