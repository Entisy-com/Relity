import { z } from 'zod';
import { MemberCreateInputObjectSchema } from './objects/MemberCreateInput.schema';

export const MemberCreateOneSchema = z.object({
  data: MemberCreateInputObjectSchema,
});
