import { z } from 'zod';
import { ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema';
import { ActionLogCreateWithoutActionsInputObjectSchema } from './ActionLogCreateWithoutActionsInput.schema';
import { ActionLogUncheckedCreateWithoutActionsInputObjectSchema } from './ActionLogUncheckedCreateWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogCreateOrConnectWithoutActionsInput> = z
  .object({
    where: z.lazy(() => ActionLogWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ActionLogCreateWithoutActionsInputObjectSchema),
      z.lazy(() => ActionLogUncheckedCreateWithoutActionsInputObjectSchema),
    ]),
  })
  .strict();

export const ActionLogCreateOrConnectWithoutActionsInputObjectSchema = Schema;
