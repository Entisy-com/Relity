import { z } from 'zod';
import { ServerSettingsWhereUniqueInputObjectSchema } from './objects/ServerSettingsWhereUniqueInput.schema';

export const ServerSettingsFindUniqueSchema = z.object({
  where: ServerSettingsWhereUniqueInputObjectSchema,
});
