import { z } from 'zod';
import { MemberWhereInputObjectSchema } from './objects/MemberWhereInput.schema';
import { MemberOrderByWithRelationInputObjectSchema } from './objects/MemberOrderByWithRelationInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './objects/MemberWhereUniqueInput.schema';
import { MemberCountAggregateInputObjectSchema } from './objects/MemberCountAggregateInput.schema';
import { MemberMinAggregateInputObjectSchema } from './objects/MemberMinAggregateInput.schema';
import { MemberMaxAggregateInputObjectSchema } from './objects/MemberMaxAggregateInput.schema';

export const MemberAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), MemberCountAggregateInputObjectSchema])
    .optional(),
  _min: MemberMinAggregateInputObjectSchema.optional(),
  _max: MemberMaxAggregateInputObjectSchema.optional(),
});
