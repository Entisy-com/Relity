import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './objects/MemberWhereUniqueInput.schema';

export const MemberDeleteOneSchema = z.object({
  where: MemberWhereUniqueInputObjectSchema,
});
