import { z } from 'zod';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionUpdateWithoutServerInputObjectSchema } from './ServerUserPositionUpdateWithoutServerInput.schema';
import { ServerUserPositionUncheckedUpdateWithoutServerInputObjectSchema } from './ServerUserPositionUncheckedUpdateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionUpdateWithWhereUniqueWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ServerUserPositionUpdateWithoutServerInputObjectSchema),
        z.lazy(
          () => ServerUserPositionUncheckedUpdateWithoutServerInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ServerUserPositionUpdateWithWhereUniqueWithoutServerInputObjectSchema =
  Schema;
