import { z } from 'zod';
import { ServerSettingsWhereUniqueInputObjectSchema } from './objects/ServerSettingsWhereUniqueInput.schema';

export const ServerSettingsDeleteOneSchema = z.object({
  where: ServerSettingsWhereUniqueInputObjectSchema,
});
