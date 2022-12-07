import { z } from 'zod';
import { TextChannelCreateInputObjectSchema } from './objects/TextChannelCreateInput.schema';

export const TextChannelCreateOneSchema = z.object({
  data: TextChannelCreateInputObjectSchema,
});
