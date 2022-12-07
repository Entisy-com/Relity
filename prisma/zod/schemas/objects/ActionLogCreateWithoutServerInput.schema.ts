import { z } from 'zod';
import { ActionTypeCreateNestedManyWithoutActionlogInputObjectSchema } from './ActionTypeCreateNestedManyWithoutActionlogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogCreateWithoutServerInput> = z
  .object({
    id: z.string().optional(),
    actions: z
      .lazy(() => ActionTypeCreateNestedManyWithoutActionlogInputObjectSchema)
      .optional(),
  })
  .strict();

export const ActionLogCreateWithoutServerInputObjectSchema = Schema;
