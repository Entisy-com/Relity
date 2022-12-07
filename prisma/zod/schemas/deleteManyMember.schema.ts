import { z } from 'zod';
import { MemberWhereInputObjectSchema } from './objects/MemberWhereInput.schema';

export const MemberDeleteManySchema = z.object({
  where: MemberWhereInputObjectSchema.optional(),
});
