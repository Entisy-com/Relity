import { z } from 'zod';
import { ServerCreateManyInputObjectSchema } from './objects/ServerCreateManyInput.schema';

export const ServerCreateManySchema = z.object({
  data: ServerCreateManyInputObjectSchema,
});
