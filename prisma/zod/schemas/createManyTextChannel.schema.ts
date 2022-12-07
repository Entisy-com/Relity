import { z } from 'zod';
import { TextChannelCreateManyInputObjectSchema } from './objects/TextChannelCreateManyInput.schema';

export const TextChannelCreateManySchema = z.object({
  data: TextChannelCreateManyInputObjectSchema,
});
