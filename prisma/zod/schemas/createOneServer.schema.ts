import { z } from 'zod';
import { ServerCreateInputObjectSchema } from './objects/ServerCreateInput.schema';

export const ServerCreateOneSchema = z.object({
  data: ServerCreateInputObjectSchema,
});
