import { z } from 'zod';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionUpdateWithoutUserInputObjectSchema } from './ServerUserPositionUpdateWithoutUserInput.schema';
import { ServerUserPositionUncheckedUpdateWithoutUserInputObjectSchema } from './ServerUserPositionUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ServerUserPositionUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => ServerUserPositionUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ServerUserPositionUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
