import { z } from 'zod';
import { ServerUserPositionWhereInputObjectSchema } from './objects/ServerUserPositionWhereInput.schema';

export const ServerUserPositionDeleteManySchema = z.object({
  where: ServerUserPositionWhereInputObjectSchema.optional(),
});
