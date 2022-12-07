import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';
import { MessageCreateInputObjectSchema } from './objects/MessageCreateInput.schema';
import { MessageUpdateInputObjectSchema } from './objects/MessageUpdateInput.schema';

export const MessageUpsertSchema = z.object({
  where: MessageWhereUniqueInputObjectSchema,
  create: MessageCreateInputObjectSchema,
  update: MessageUpdateInputObjectSchema,
});
