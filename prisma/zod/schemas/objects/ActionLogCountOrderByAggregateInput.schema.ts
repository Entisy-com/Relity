import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    serverId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ActionLogCountOrderByAggregateInputObjectSchema = Schema;
