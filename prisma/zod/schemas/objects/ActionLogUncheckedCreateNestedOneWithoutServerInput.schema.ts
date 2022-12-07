import { z } from 'zod';
import { ActionLogCreateWithoutServerInputObjectSchema } from './ActionLogCreateWithoutServerInput.schema';
import { ActionLogUncheckedCreateWithoutServerInputObjectSchema } from './ActionLogUncheckedCreateWithoutServerInput.schema';
import { ActionLogCreateOrConnectWithoutServerInputObjectSchema } from './ActionLogCreateOrConnectWithoutServerInput.schema';
import { ActionLogWhereUniqueInputObjectSchema } from './ActionLogWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUncheckedCreateNestedOneWithoutServerInput> =
  z
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
      connect: z.lazy(() => ActionLogWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ActionLogUncheckedCreateNestedOneWithoutServerInputObjectSchema =
  Schema;
