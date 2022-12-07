import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';
import { ServerCreateInputObjectSchema } from './objects/ServerCreateInput.schema';
import { ServerUpdateInputObjectSchema } from './objects/ServerUpdateInput.schema';

export const ServerUpsertSchema = z.object({
  where: ServerWhereUniqueInputObjectSchema,
  create: ServerCreateInputObjectSchema,
  update: ServerUpdateInputObjectSchema,
});
