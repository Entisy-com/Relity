import { z } from 'zod';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionCreateWithoutUserInputObjectSchema } from './ServerUserPositionCreateWithoutUserInput.schema';
import { ServerUserPositionUncheckedCreateWithoutUserInputObjectSchema } from './ServerUserPositionUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ServerUserPositionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ServerUserPositionCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => ServerUserPositionUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ServerUserPositionCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
