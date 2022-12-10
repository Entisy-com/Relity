import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserSettingsCountOrderByAggregateInputObjectSchema } from './UserSettingsCountOrderByAggregateInput.schema';
import { UserSettingsMaxOrderByAggregateInputObjectSchema } from './UserSettingsMaxOrderByAggregateInput.schema';
import { UserSettingsMinOrderByAggregateInputObjectSchema } from './UserSettingsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userid: z.lazy(() => SortOrderSchema).optional(),
    notifyUnban: z.lazy(() => SortOrderSchema).optional(),
    notifyBan: z.lazy(() => SortOrderSchema).optional(),
    notifyKick: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => UserSettingsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => UserSettingsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => UserSettingsMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserSettingsOrderByWithAggregationInputObjectSchema = Schema;
