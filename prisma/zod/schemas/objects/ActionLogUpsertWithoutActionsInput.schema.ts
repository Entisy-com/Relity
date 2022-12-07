import { z } from 'zod';
import { ActionLogUpdateWithoutActionsInputObjectSchema } from './ActionLogUpdateWithoutActionsInput.schema';
import { ActionLogUncheckedUpdateWithoutActionsInputObjectSchema } from './ActionLogUncheckedUpdateWithoutActionsInput.schema';
import { ActionLogCreateWithoutActionsInputObjectSchema } from './ActionLogCreateWithoutActionsInput.schema';
import { ActionLogUncheckedCreateWithoutActionsInputObjectSchema } from './ActionLogUncheckedCreateWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUpsertWithoutActionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ActionLogUpdateWithoutActionsInputObjectSchema),
      z.lazy(() => ActionLogUncheckedUpdateWithoutActionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ActionLogCreateWithoutActionsInputObjectSchema),
      z.lazy(() => ActionLogUncheckedCreateWithoutActionsInputObjectSchema),
    ]),
  })
  .strict();

export const ActionLogUpsertWithoutActionsInputObjectSchema = Schema;
