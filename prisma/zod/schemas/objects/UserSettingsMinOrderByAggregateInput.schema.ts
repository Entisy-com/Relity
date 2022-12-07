import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userid: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserSettingsMinOrderByAggregateInputObjectSchema = Schema;
