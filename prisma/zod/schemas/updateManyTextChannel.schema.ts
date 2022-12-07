import { z } from 'zod';
import { TextChannelUpdateManyMutationInputObjectSchema } from './objects/TextChannelUpdateManyMutationInput.schema';
import { TextChannelWhereInputObjectSchema } from './objects/TextChannelWhereInput.schema';

export const TextChannelUpdateManySchema = z.object({
  data: TextChannelUpdateManyMutationInputObjectSchema,
  where: TextChannelWhereInputObjectSchema.optional(),
});
