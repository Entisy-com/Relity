import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema';
import { TextChannelOrderByRelationAggregateInputObjectSchema } from './TextChannelOrderByRelationAggregateInput.schema';
import { VoiceChannelOrderByRelationAggregateInputObjectSchema } from './VoiceChannelOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    serverid: z.lazy(() => SortOrderSchema).optional(),
    permissions: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional(),
    textchannels: z
      .lazy(() => TextChannelOrderByRelationAggregateInputObjectSchema)
      .optional(),
    voicechannels: z
      .lazy(() => VoiceChannelOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryOrderByWithRelationInputObjectSchema = Schema;
