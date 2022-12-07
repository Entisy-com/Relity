import { z } from 'zod';
import { ServerCreateNestedOneWithoutActionLogInputObjectSchema } from './ServerCreateNestedOneWithoutActionLogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogCreateWithoutActionsInput> = z
  .object({
    id: z.string().optional(),
    server: z.lazy(
      () => ServerCreateNestedOneWithoutActionLogInputObjectSchema,
    ),
  })
  .strict();

export const ActionLogCreateWithoutActionsInputObjectSchema = Schema;
