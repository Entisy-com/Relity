import { z } from 'zod';
import { ServerCreateNestedOneWithoutActionLogInputObjectSchema } from './ServerCreateNestedOneWithoutActionLogInput.schema';
import { ActionTypeCreateNestedManyWithoutActionlogInputObjectSchema } from './ActionTypeCreateNestedManyWithoutActionlogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogCreateInput> = z
  .object({
    id: z.string().optional(),
    server: z.lazy(
      () => ServerCreateNestedOneWithoutActionLogInputObjectSchema,
    ),
    actions: z
      .lazy(() => ActionTypeCreateNestedManyWithoutActionlogInputObjectSchema)
      .optional(),
  })
  .strict();

export const ActionLogCreateInputObjectSchema = Schema;
