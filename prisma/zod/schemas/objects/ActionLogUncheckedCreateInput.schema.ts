import { z } from 'zod';
import { ActionTypeUncheckedCreateNestedManyWithoutActionlogInputObjectSchema } from './ActionTypeUncheckedCreateNestedManyWithoutActionlogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    serverId: z.string(),
    actions: z
      .lazy(
        () =>
          ActionTypeUncheckedCreateNestedManyWithoutActionlogInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ActionLogUncheckedCreateInputObjectSchema = Schema;
