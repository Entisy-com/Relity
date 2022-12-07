import { z } from 'zod';
import { TextChannelUpdateInputObjectSchema } from './objects/TextChannelUpdateInput.schema';
import { TextChannelWhereUniqueInputObjectSchema } from './objects/TextChannelWhereUniqueInput.schema';

export const TextChannelUpdateOneSchema = z.object({
  data: TextChannelUpdateInputObjectSchema,
  where: TextChannelWhereUniqueInputObjectSchema,
});
