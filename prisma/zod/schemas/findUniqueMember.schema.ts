import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './objects/MemberWhereUniqueInput.schema';

export const MemberFindUniqueSchema = z.object({
  where: MemberWhereUniqueInputObjectSchema,
});
