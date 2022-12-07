import { z } from 'zod';
import { ActionSchema } from '../enums/Action.schema';
import { ActionLogCreateNestedOneWithoutActionsInputObjectSchema } from './ActionLogCreateNestedOneWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeCreateWithoutMemberInput> = z
  .object({
    id: z.string().optional(),
    action: z.lazy(() => ActionSchema),
    actionlog: z.lazy(
      () => ActionLogCreateNestedOneWithoutActionsInputObjectSchema,
    ),
    createdAt: z.date().optional(),
  })
  .strict();

export const ActionTypeCreateWithoutMemberInputObjectSchema = Schema;
