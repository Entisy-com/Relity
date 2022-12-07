import { z } from 'zod';
import { MemberCreateManyInputObjectSchema } from './objects/MemberCreateManyInput.schema';

export const MemberCreateManySchema = z.object({
  data: MemberCreateManyInputObjectSchema,
});
