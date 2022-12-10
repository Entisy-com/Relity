import { z } from 'zod';
import { ServerSettingsUpdateManyMutationInputObjectSchema } from './objects/ServerSettingsUpdateManyMutationInput.schema';
import { ServerSettingsWhereInputObjectSchema } from './objects/ServerSettingsWhereInput.schema';

export const ServerSettingsUpdateManySchema = z.object({
  data: ServerSettingsUpdateManyMutationInputObjectSchema,
  where: ServerSettingsWhereInputObjectSchema.optional(),
});
