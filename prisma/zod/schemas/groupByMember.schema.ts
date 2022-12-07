import { z } from 'zod';
import { MemberWhereInputObjectSchema } from './objects/MemberWhereInput.schema';
import { MemberOrderByWithAggregationInputObjectSchema } from './objects/MemberOrderByWithAggregationInput.schema';
import { MemberScalarWhereWithAggregatesInputObjectSchema } from './objects/MemberScalarWhereWithAggregatesInput.schema';
import { MemberScalarFieldEnumSchema } from './enums/MemberScalarFieldEnum.schema';

export const MemberGroupBySchema = z.object({
  where: MemberWhereInputObjectSchema.optional(),
  orderBy: z.union([
    MemberOrderByWithAggregationInputObjectSchema,
    MemberOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: MemberScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MemberScalarFieldEnumSchema),
});
