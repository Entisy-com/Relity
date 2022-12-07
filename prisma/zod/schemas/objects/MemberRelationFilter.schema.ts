import { z } from 'zod';
import { MemberWhereInputObjectSchema } from './MemberWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberRelationFilter> = z
  .object({
    is: z.lazy(() => MemberWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => MemberWhereInputObjectSchema).optional(),
  })
  .strict();

export const MemberRelationFilterObjectSchema = Schema;
