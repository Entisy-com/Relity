import { z } from 'zod';
import { ServerUserPositionUpdateManyMutationInputObjectSchema } from './objects/ServerUserPositionUpdateManyMutationInput.schema';
import { ServerUserPositionWhereInputObjectSchema } from './objects/ServerUserPositionWhereInput.schema';

export const ServerUserPositionUpdateManySchema = z.object({
  data: ServerUserPositionUpdateManyMutationInputObjectSchema,
  where: ServerUserPositionWhereInputObjectSchema.optional(),
});
