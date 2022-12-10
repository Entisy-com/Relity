import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userid: z.lazy(() => SortOrderSchema).optional(),
    notifyUnban: z.lazy(() => SortOrderSchema).optional(),
    notifyBan: z.lazy(() => SortOrderSchema).optional(),
    notifyKick: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserSettingsCountOrderByAggregateInputObjectSchema = Schema;
