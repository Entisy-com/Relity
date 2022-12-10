import { z } from 'zod';
import { ServerSettingsWhereInputObjectSchema } from './objects/ServerSettingsWhereInput.schema';
import { ServerSettingsOrderByWithRelationInputObjectSchema } from './objects/ServerSettingsOrderByWithRelationInput.schema';
import { ServerSettingsWhereUniqueInputObjectSchema } from './objects/ServerSettingsWhereUniqueInput.schema';
import { ServerSettingsScalarFieldEnumSchema } from './enums/ServerSettingsScalarFieldEnum.schema';

export const ServerSettingsFindManySchema = z.object({
  where: ServerSettingsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ServerSettingsOrderByWithRelationInputObjectSchema,
      ServerSettingsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ServerSettingsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ServerSettingsScalarFieldEnumSchema).optional(),
});
