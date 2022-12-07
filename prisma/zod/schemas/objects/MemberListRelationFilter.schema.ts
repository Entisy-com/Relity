import { z } from 'zod';
import { MemberWhereInputObjectSchema } from './MemberWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberListRelationFilter> = z
  .object({
    every: z.lazy(() => MemberWhereInputObjectSchema).optional(),
    some: z.lazy(() => MemberWhereInputObjectSchema).optional(),
    none: z.lazy(() => MemberWhereInputObjectSchema).optional(),
  })
  .strict();

export const MemberListRelationFilterObjectSchema = Schema;
