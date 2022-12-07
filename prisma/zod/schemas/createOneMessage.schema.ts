import { z } from 'zod';
import { MessageCreateInputObjectSchema } from './objects/MessageCreateInput.schema';

export const MessageCreateOneSchema = z.object({
  data: MessageCreateInputObjectSchema,
});
