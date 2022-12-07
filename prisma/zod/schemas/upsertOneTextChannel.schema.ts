import { z } from 'zod';
import { TextChannelWhereUniqueInputObjectSchema } from './objects/TextChannelWhereUniqueInput.schema';
import { TextChannelCreateInputObjectSchema } from './objects/TextChannelCreateInput.schema';
import { TextChannelUpdateInputObjectSchema } from './objects/TextChannelUpdateInput.schema';

export const TextChannelUpsertSchema = z.object({
  where: TextChannelWhereUniqueInputObjectSchema,
  create: TextChannelCreateInputObjectSchema,
  update: TextChannelUpdateInputObjectSchema,
});
