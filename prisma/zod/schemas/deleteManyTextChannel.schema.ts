import { z } from 'zod';
import { TextChannelWhereInputObjectSchema } from './objects/TextChannelWhereInput.schema';

export const TextChannelDeleteManySchema = z.object({
  where: TextChannelWhereInputObjectSchema.optional(),
});
