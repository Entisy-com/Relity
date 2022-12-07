import { z } from 'zod';
import { ActionSchema } from '../enums/Action.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUncheckedCreateWithoutActionlogInput> =
  z
    .object({
      id: z.string().optional(),
      memberId: z.string(),
      action: z.lazy(() => ActionSchema),
      createdAt: z.date().optional(),
    })
    .strict();

export const ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema =
  Schema;
