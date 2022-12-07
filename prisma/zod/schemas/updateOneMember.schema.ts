import { z } from 'zod';
import { MemberUpdateInputObjectSchema } from './objects/MemberUpdateInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './objects/MemberWhereUniqueInput.schema';

export const MemberUpdateOneSchema = z.object({
  data: MemberUpdateInputObjectSchema,
  where: MemberWhereUniqueInputObjectSchema,
});
