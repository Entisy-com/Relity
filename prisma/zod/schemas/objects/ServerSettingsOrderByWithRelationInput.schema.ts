import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    serverid: z.lazy(() => SortOrderSchema).optional(),
    server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional(),
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
  })
  .strict();

export const ServerSettingsOrderByWithRelationInputObjectSchema = Schema;
