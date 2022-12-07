import { z } from 'zod';
import { MemberWhereInputObjectSchema } from './objects/MemberWhereInput.schema';
import { MemberOrderByWithRelationInputObjectSchema } from './objects/MemberOrderByWithRelationInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './objects/MemberWhereUniqueInput.schema';
import { MemberScalarFieldEnumSchema } from './enums/MemberScalarFieldEnum.schema';

export const MemberFindManySchema = z.object({
  where: MemberWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MemberOrderByWithRelationInputObjectSchema,
      MemberOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: MemberWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MemberScalarFieldEnumSchema).optional(),
});
