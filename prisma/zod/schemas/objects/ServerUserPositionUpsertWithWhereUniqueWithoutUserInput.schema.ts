import { z } from 'zod';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionUpdateWithoutUserInputObjectSchema } from './ServerUserPositionUpdateWithoutUserInput.schema';
import { ServerUserPositionUncheckedUpdateWithoutUserInputObjectSchema } from './ServerUserPositionUncheckedUpdateWithoutUserInput.schema';
import { ServerUserPositionCreateWithoutUserInputObjectSchema } from './ServerUserPositionCreateWithoutUserInput.schema';
import { ServerUserPositionUncheckedCreateWithoutUserInputObjectSchema } from './ServerUserPositionUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ServerUserPositionUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => ServerUserPositionUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ServerUserPositionCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => ServerUserPositionUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ServerUserPositionUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
