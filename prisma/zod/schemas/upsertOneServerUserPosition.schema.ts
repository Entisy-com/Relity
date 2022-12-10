import { z } from 'zod';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './objects/ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionCreateInputObjectSchema } from './objects/ServerUserPositionCreateInput.schema';
import { ServerUserPositionUpdateInputObjectSchema } from './objects/ServerUserPositionUpdateInput.schema';

export const ServerUserPositionUpsertSchema = z.object({
  where: ServerUserPositionWhereUniqueInputObjectSchema,
  create: ServerUserPositionCreateInputObjectSchema,
  update: ServerUserPositionUpdateInputObjectSchema,
});
