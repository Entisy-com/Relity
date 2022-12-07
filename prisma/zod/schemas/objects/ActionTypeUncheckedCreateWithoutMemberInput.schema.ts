import { z } from 'zod';
import { ActionSchema } from '../enums/Action.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUncheckedCreateWithoutMemberInput> = z
  .object({
    id: z.string().optional(),
    action: z.lazy(() => ActionSchema),
    actionlogid: z.string(),
    createdAt: z.date().optional(),
  })
  .strict();

export const ActionTypeUncheckedCreateWithoutMemberInputObjectSchema = Schema;
