import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { MemberRelationFilterObjectSchema } from './MemberRelationFilter.schema';
import { MemberWhereInputObjectSchema } from './MemberWhereInput.schema';
import { EnumActionFilterObjectSchema } from './EnumActionFilter.schema';
import { ActionSchema } from '../enums/Action.schema';
import { ActionLogRelationFilterObjectSchema } from './ActionLogRelationFilter.schema';
import { ActionLogWhereInputObjectSchema } from './ActionLogWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ActionTypeWhereInputObjectSchema),
        z.lazy(() => ActionTypeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ActionTypeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ActionTypeWhereInputObjectSchema),
        z.lazy(() => ActionTypeWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    member: z
      .union([
        z.lazy(() => MemberRelationFilterObjectSchema),
        z.lazy(() => MemberWhereInputObjectSchema),
      ])
      .optional(),
    memberId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    action: z
      .union([
        z.lazy(() => EnumActionFilterObjectSchema),
        z.lazy(() => ActionSchema),
      ])
      .optional(),
    actionlog: z
      .union([
        z.lazy(() => ActionLogRelationFilterObjectSchema),
        z.lazy(() => ActionLogWhereInputObjectSchema),
      ])
      .optional(),
    actionlogid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ActionTypeWhereInputObjectSchema = Schema;
