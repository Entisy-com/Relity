import { z } from 'zod';
import { TextChannelWhereInputObjectSchema } from './objects/TextChannelWhereInput.schema';
import { TextChannelOrderByWithRelationInputObjectSchema } from './objects/TextChannelOrderByWithRelationInput.schema';
import { TextChannelWhereUniqueInputObjectSchema } from './objects/TextChannelWhereUniqueInput.schema';
import { TextChannelScalarFieldEnumSchema } from './enums/TextChannelScalarFieldEnum.schema';

export const TextChannelFindFirstSchema = z.object({
  where: TextChannelWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TextChannelOrderByWithRelationInputObjectSchema,
      TextChannelOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: TextChannelWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TextChannelScalarFieldEnumSchema).optional(),
});
