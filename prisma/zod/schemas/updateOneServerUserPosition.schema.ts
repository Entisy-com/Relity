import { z } from 'zod';
import { ServerUserPositionUpdateInputObjectSchema } from './objects/ServerUserPositionUpdateInput.schema';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './objects/ServerUserPositionWhereUniqueInput.schema';

export const ServerUserPositionUpdateOneSchema = z.object({
  data: ServerUserPositionUpdateInputObjectSchema,
  where: ServerUserPositionWhereUniqueInputObjectSchema,
});
