import { z } from 'zod';
import { ActionLogCreateWithoutActionsInputObjectSchema } from './ActionLogCreateWithoutActionsInput.schema';
import { ActionLogUncheckedCreateWithoutActionsInputObjectSchema } from './ActionLogUncheckedCreateWithoutActionsInput.schema';
import { ActionLogCreateOrConnectWithoutActionsInputObjectSchema } from './ActionLogCreateOrConnectWithoutActionsInput.schema';
import { ActionLogUpsertWithoutActionsInputObjectSchema } from './ActionLogUpsertWithoutActionsInput.schema';
import { ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema';
import { ActionLogUpdateWithoutActionsInputObjectSchema } from './ActionLogUpdateWithoutActionsInput.schema';
import { ActionLogUncheckedUpdateWithoutActionsInputObjectSchema } from './ActionLogUncheckedUpdateWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUpdateOneRequiredWithoutActionsNestedInput> =
  z
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
      upsert: z
        .lazy(() => ActionLogUpsertWithoutActionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ActionLogWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ActionLogUpdateWithoutActionsInputObjectSchema),
          z.lazy(() => ActionLogUncheckedUpdateWithoutActionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ActionLogUpdateOneRequiredWithoutActionsNestedInputObjectSchema =
  Schema;
