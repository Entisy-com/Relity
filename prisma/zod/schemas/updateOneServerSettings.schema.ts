import { z } from 'zod';
import { ServerSettingsUpdateInputObjectSchema } from './objects/ServerSettingsUpdateInput.schema';
import { ServerSettingsWhereUniqueInputObjectSchema } from './objects/ServerSettingsWhereUniqueInput.schema';

export const ServerSettingsUpdateOneSchema = z.object({
  data: ServerSettingsUpdateInputObjectSchema,
  where: ServerSettingsWhereUniqueInputObjectSchema,
});
