import { z } from 'zod';
import { ServerUserPositionCreateInputObjectSchema } from './objects/ServerUserPositionCreateInput.schema';

export const ServerUserPositionCreateOneSchema = z.object({
  data: ServerUserPositionCreateInputObjectSchema,
});
