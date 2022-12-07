import { z } from 'zod';
import { MemberCreateNestedOneWithoutActionTypeInputObjectSchema } from './MemberCreateNestedOneWithoutActionTypeInput.schema';
import { ActionSchema } from '../enums/Action.schema';
import { ActionLogCreateNestedOneWithoutActionsInputObjectSchema } from './ActionLogCreateNestedOneWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeCreateInput> = z
  .object({
    id: z.string().optional(),
    member: z.lazy(
      () => MemberCreateNestedOneWithoutActionTypeInputObjectSchema,
    ),
    action: z.lazy(() => ActionSchema),
    actionlog: z.lazy(
      () => ActionLogCreateNestedOneWithoutActionsInputObjectSchema,
    ),
    createdAt: z.date().optional(),
  })
  .strict();

export const ActionTypeCreateInputObjectSchema = Schema;
