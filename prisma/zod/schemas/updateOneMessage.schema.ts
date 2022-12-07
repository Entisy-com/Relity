import { z } from 'zod';
import { MessageUpdateInputObjectSchema } from './objects/MessageUpdateInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';

export const MessageUpdateOneSchema = z.object({
  data: MessageUpdateInputObjectSchema,
  where: MessageWhereUniqueInputObjectSchema,
});
