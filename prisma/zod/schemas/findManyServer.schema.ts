import { z } from 'zod';
import { ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';
import { ServerOrderByWithRelationInputObjectSchema } from './objects/ServerOrderByWithRelationInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';
import { ServerScalarFieldEnumSchema } from './enums/ServerScalarFieldEnum.schema';

export const ServerFindManySchema = z.object({
  where: ServerWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ServerOrderByWithRelationInputObjectSchema,
      ServerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ServerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ServerScalarFieldEnumSchema).optional(),
});
