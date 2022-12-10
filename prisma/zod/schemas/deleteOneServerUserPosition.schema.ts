import { z } from 'zod';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './objects/ServerUserPositionWhereUniqueInput.schema';

export const ServerUserPositionDeleteOneSchema = z.object({
  where: ServerUserPositionWhereUniqueInputObjectSchema,
});
