import { z } from 'zod';
import { MessageWhereInputObjectSchema } from './objects/MessageWhereInput.schema';
import { MessageOrderByWithRelationInputObjectSchema } from './objects/MessageOrderByWithRelationInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';
import { MessageScalarFieldEnumSchema } from './enums/MessageScalarFieldEnum.schema';

export const MessageFindManySchema = z.object({
  where: MessageWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MessageOrderByWithRelationInputObjectSchema,
      MessageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: MessageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MessageScalarFieldEnumSchema).optional(),
});
