import { z } from 'zod';
import { ActionLogUpdateWithoutServerInputObjectSchema } from './ActionLogUpdateWithoutServerInput.schema';
import { ActionLogUncheckedUpdateWithoutServerInputObjectSchema } from './ActionLogUncheckedUpdateWithoutServerInput.schema';
import { ActionLogCreateWithoutServerInputObjectSchema } from './ActionLogCreateWithoutServerInput.schema';
import { ActionLogUncheckedCreateWithoutServerInputObjectSchema } from './ActionLogUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUpsertWithoutServerInput> = z
  .object({
    update: z.union([
      z.lazy(() => ActionLogUpdateWithoutServerInputObjectSchema),
      z.lazy(() => ActionLogUncheckedUpdateWithoutServerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ActionLogCreateWithoutServerInputObjectSchema),
      z.lazy(() => ActionLogUncheckedCreateWithoutServerInputObjectSchema),
    ]),
  })
  .strict();

export const ActionLogUpsertWithoutServerInputObjectSchema = Schema;
