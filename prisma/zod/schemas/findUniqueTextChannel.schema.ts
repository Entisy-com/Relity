import { z } from 'zod';
import { TextChannelWhereUniqueInputObjectSchema } from './objects/TextChannelWhereUniqueInput.schema';

export const TextChannelFindUniqueSchema = z.object({
  where: TextChannelWhereUniqueInputObjectSchema,
});
