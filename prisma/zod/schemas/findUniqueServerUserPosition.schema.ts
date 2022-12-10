import { z } from 'zod';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './objects/ServerUserPositionWhereUniqueInput.schema';

export const ServerUserPositionFindUniqueSchema = z.object({
  where: ServerUserPositionWhereUniqueInputObjectSchema,
});
