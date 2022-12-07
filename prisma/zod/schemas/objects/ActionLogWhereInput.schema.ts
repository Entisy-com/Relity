import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ServerRelationFilterObjectSchema } from './ServerRelationFilter.schema';
import { ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ActionTypeListRelationFilterObjectSchema } from './ActionTypeListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ActionLogWhereInputObjectSchema),
        z.lazy(() => ActionLogWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ActionLogWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ActionLogWhereInputObjectSchema),
        z.lazy(() => ActionLogWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    server: z
      .union([
        z.lazy(() => ServerRelationFilterObjectSchema),
        z.lazy(() => ServerWhereInputObjectSchema),
      ])
      .optional(),
    serverId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    actions: z.lazy(() => ActionTypeListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ActionLogWhereInputObjectSchema = Schema;
