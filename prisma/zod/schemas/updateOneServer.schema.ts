import { z } from 'zod';
import { ServerUpdateInputObjectSchema } from './objects/ServerUpdateInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';

export const ServerUpdateOneSchema = z.object({
  data: ServerUpdateInputObjectSchema,
  where: ServerWhereUniqueInputObjectSchema,
});
