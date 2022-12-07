import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    pfp: z.lazy(() => SortOrderSchema).optional(),
    banner: z.lazy(() => SortOrderSchema).optional(),
    nickname: z.lazy(() => SortOrderSchema).optional(),
    voiceChannelId: z.lazy(() => SortOrderSchema).optional(),
    serverId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MemberCountOrderByAggregateInputObjectSchema = Schema;
