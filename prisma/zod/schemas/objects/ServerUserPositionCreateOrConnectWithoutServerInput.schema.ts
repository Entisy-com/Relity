import { z } from 'zod';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionCreateWithoutServerInputObjectSchema } from './ServerUserPositionCreateWithoutServerInput.schema';
import { ServerUserPositionUncheckedCreateWithoutServerInputObjectSchema } from './ServerUserPositionUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateOrConnectWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ServerUserPositionCreateWithoutServerInputObjectSchema),
        z.lazy(
          () => ServerUserPositionUncheckedCreateWithoutServerInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ServerUserPositionCreateOrConnectWithoutServerInputObjectSchema =
  Schema;
