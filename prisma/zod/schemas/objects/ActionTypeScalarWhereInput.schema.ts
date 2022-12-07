import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumActionFilterObjectSchema } from './EnumActionFilter.schema';
import { ActionSchema } from '../enums/Action.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ActionTypeScalarWhereInputObjectSchema),
        z.lazy(() => ActionTypeScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ActionTypeScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ActionTypeScalarWhereInputObjectSchema),
        z.lazy(() => ActionTypeScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
    actionlogid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ActionTypeScalarWhereInputObjectSchema = Schema;
