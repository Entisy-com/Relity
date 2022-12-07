import { z } from 'zod';
import { ActionTypeUncheckedCreateNestedManyWithoutActionlogInputObjectSchema } from './ActionTypeUncheckedCreateNestedManyWithoutActionlogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUncheckedCreateWithoutServerInput> = z
  .object({
    id: z.string().optional(),
    actions: z
      .lazy(
        () =>
          ActionTypeUncheckedCreateNestedManyWithoutActionlogInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ActionLogUncheckedCreateWithoutServerInputObjectSchema = Schema;
