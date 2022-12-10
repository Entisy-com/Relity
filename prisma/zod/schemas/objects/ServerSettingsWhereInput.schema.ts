import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ServerRelationFilterObjectSchema } from './ServerRelationFilter.schema';
import { ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerSettingsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServerSettingsWhereInputObjectSchema),
        z.lazy(() => ServerSettingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServerSettingsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServerSettingsWhereInputObjectSchema),
        z.lazy(() => ServerSettingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    serverid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    server: z
      .union([
        z.lazy(() => ServerRelationFilterObjectSchema),
        z.lazy(() => ServerWhereInputObjectSchema),
      ])
      .optional(),
    logRoleUpdates: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    logMemberUpdates: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    logChannelUpdates: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    logMessageUpdates: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    logMessages: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    logJoinLeave: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    notifyUnban: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    notifyBan: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    notifyKick: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    showBadges: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
  })
  .strict();

export const ServerSettingsWhereInputObjectSchema = Schema;
