import { z } from 'zod';
import { ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema';
import { ActionLogCreateWithoutServerInputObjectSchema } from './ActionLogCreateWithoutServerInput.schema';
import { ActionLogUncheckedCreateWithoutServerInputObjectSchema } from './ActionLogUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogCreateOrConnectWithoutServerInput> = z
  .object({
    where: z.lazy(() => ActionLogWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ActionLogCreateWithoutServerInputObjectSchema),
      z.lazy(() => ActionLogUncheckedCreateWithoutServerInputObjectSchema),
    ]),
  })
  .strict();

export const ActionLogCreateOrConnectWithoutServerInputObjectSchema = Schema;
