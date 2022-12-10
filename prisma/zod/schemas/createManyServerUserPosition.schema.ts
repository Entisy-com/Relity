import { z } from 'zod';
import { ServerUserPositionCreateManyInputObjectSchema } from './objects/ServerUserPositionCreateManyInput.schema';

export const ServerUserPositionCreateManySchema = z.object({
  data: ServerUserPositionCreateManyInputObjectSchema,
});
