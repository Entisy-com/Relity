import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServerSettingsCountOrderByAggregateInputObjectSchema } from './ServerSettingsCountOrderByAggregateInput.schema';
import { ServerSettingsMaxOrderByAggregateInputObjectSchema } from './ServerSettingsMaxOrderByAggregateInput.schema';
import { ServerSettingsMinOrderByAggregateInputObjectSchema } from './ServerSettingsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    serverid: z.lazy(() => SortOrderSchema).optional(),
    logRoleUpdates: z.lazy(() => SortOrderSchema).optional(),
    logMemberUpdates: z.lazy(() => SortOrderSchema).optional(),
    logChannelUpdates: z.lazy(() => SortOrderSchema).optional(),
    logMessageUpdates: z.lazy(() => SortOrderSchema).optional(),
    logMessages: z.lazy(() => SortOrderSchema).optional(),
    logJoinLeave: z.lazy(() => SortOrderSchema).optional(),
    notifyUnban: z.lazy(() => SortOrderSchema).optional(),
    notifyBan: z.lazy(() => SortOrderSchema).optional(),
    notifyKick: z.lazy(() => SortOrderSchema).optional(),
    showBadges: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ServerSettingsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ServerSettingsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ServerSettingsMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ServerSettingsOrderByWithAggregationInputObjectSchema = Schema;
