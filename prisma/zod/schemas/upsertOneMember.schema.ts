import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './objects/MemberWhereUniqueInput.schema';
import { MemberCreateInputObjectSchema } from './objects/MemberCreateInput.schema';
import { MemberUpdateInputObjectSchema } from './objects/MemberUpdateInput.schema';

export const MemberUpsertSchema = z.object({
  where: MemberWhereUniqueInputObjectSchema,
  create: MemberCreateInputObjectSchema,
  update: MemberUpdateInputObjectSchema,
});
