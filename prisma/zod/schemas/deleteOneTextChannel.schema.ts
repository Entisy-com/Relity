import { z } from 'zod';
import { TextChannelWhereUniqueInputObjectSchema } from './objects/TextChannelWhereUniqueInput.schema';

export const TextChannelDeleteOneSchema = z.object({
  where: TextChannelWhereUniqueInputObjectSchema,
});
