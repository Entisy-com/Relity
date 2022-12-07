import { z } from 'zod';
import { MemberUpdateManyMutationInputObjectSchema } from './objects/MemberUpdateManyMutationInput.schema';
import { MemberWhereInputObjectSchema } from './objects/MemberWhereInput.schema';

export const MemberUpdateManySchema = z.object({
  data: MemberUpdateManyMutationInputObjectSchema,
  where: MemberWhereInputObjectSchema.optional(),
});
