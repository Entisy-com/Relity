import { z } from 'zod';
import { ActionLogCreateWithoutServerInputObjectSchema } from './ActionLogCreateWithoutServerInput.schema';
import { ActionLogUncheckedCreateWithoutServerInputObjectSchema } from './ActionLogUncheckedCreateWithoutServerInput.schema';
import { ActionLogCreateOrConnectWithoutServerInputObjectSchema } from './ActionLogCreateOrConnectWithoutServerInput.schema';
import { ActionLogUpsertWithoutServerInputObjectSchema } from './ActionLogUpsertWithoutServerInput.schema';
import { ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema';
import { ActionLogUpdateWithoutServerInputObjectSchema } from './ActionLogUpdateWithoutServerInput.schema';
import { ActionLogUncheckedUpdateWithoutServerInputObjectSchema } from './ActionLogUncheckedUpdateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUpdateOneWithoutServerNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ActionLogCreateWithoutServerInputObjectSchema),
        z.lazy(() => ActionLogUncheckedCreateWithoutServerInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ActionLogCreateOrConnectWithoutServerInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ActionLogUpsertWithoutServerInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ActionLogWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ActionLogUpdateWithoutServerInputObjectSchema),
        z.lazy(() => ActionLogUncheckedUpdateWithoutServerInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ActionLogUpdateOneWithoutServerNestedInputObjectSchema = Schema;
