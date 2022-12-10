import { z } from 'zod';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionUpdateWithoutServerInputObjectSchema } from './ServerUserPositionUpdateWithoutServerInput.schema';
import { ServerUserPositionUncheckedUpdateWithoutServerInputObjectSchema } from './ServerUserPositionUncheckedUpdateWithoutServerInput.schema';
import { ServerUserPositionCreateWithoutServerInputObjectSchema } from './ServerUserPositionCreateWithoutServerInput.schema';
import { ServerUserPositionUncheckedCreateWithoutServerInputObjectSchema } from './ServerUserPositionUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionUpsertWithWhereUniqueWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ServerUserPositionUpdateWithoutServerInputObjectSchema),
        z.lazy(
          () => ServerUserPositionUncheckedUpdateWithoutServerInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ServerUserPositionCreateWithoutServerInputObjectSchema),
        z.lazy(
          () => ServerUserPositionUncheckedCreateWithoutServerInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ServerUserPositionUpsertWithWhereUniqueWithoutServerInputObjectSchema =
  Schema;
