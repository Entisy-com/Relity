import { z } from 'zod';
import { ActionLogCreateWithoutActionsInputObjectSchema } from './ActionLogCreateWithoutActionsInput.schema';
import { ActionLogUncheckedCreateWithoutActionsInputObjectSchema } from './ActionLogUncheckedCreateWithoutActionsInput.schema';
import { ActionLogCreateOrConnectWithoutActionsInputObjectSchema } from './ActionLogCreateOrConnectWithoutActionsInput.schema';
import { ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogCreateNestedOneWithoutActionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ActionLogCreateWithoutActionsInputObjectSchema),
        z.lazy(() => ActionLogUncheckedCreateWithoutActionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ActionLogCreateOrConnectWithoutActionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ActionLogWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ActionLogCreateNestedOneWithoutActionsInputObjectSchema = Schema;
