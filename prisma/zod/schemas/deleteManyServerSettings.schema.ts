import { z } from 'zod';
import { ServerSettingsWhereInputObjectSchema } from './objects/ServerSettingsWhereInput.schema';

export const ServerSettingsDeleteManySchema = z.object({
  where: ServerSettingsWhereInputObjectSchema.optional(),
});
