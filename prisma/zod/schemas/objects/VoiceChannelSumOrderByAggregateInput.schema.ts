import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelSumOrderByAggregateInput> = z
  .object({
    position: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const VoiceChannelSumOrderByAggregateInputObjectSchema = Schema;
