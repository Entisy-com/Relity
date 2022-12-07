import { z } from 'zod';
import { MemberCreateNestedOneWithoutActionTypeInputObjectSchema } from './MemberCreateNestedOneWithoutActionTypeInput.schema';
import { ActionSchema } from '../enums/Action.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeCreateWithoutActionlogInput> = z
  .object({
    id: z.string().optional(),
    member: z.lazy(
      () => MemberCreateNestedOneWithoutActionTypeInputObjectSchema,
    ),
    action: z.lazy(() => ActionSchema),
    createdAt: z.date().optional(),
  })
  .strict();

export const ActionTypeCreateWithoutActionlogInputObjectSchema = Schema;
