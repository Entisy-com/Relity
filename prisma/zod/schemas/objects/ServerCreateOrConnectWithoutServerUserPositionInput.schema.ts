import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutServerUserPositionInputObjectSchema } from './ServerCreateWithoutServerUserPositionInput.schema';
import { ServerUncheckedCreateWithoutServerUserPositionInputObjectSchema } from './ServerUncheckedCreateWithoutServerUserPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateOrConnectWithoutServerUserPositionInput> =
  z
    .object({
      where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ServerCreateWithoutServerUserPositionInputObjectSchema),
        z.lazy(
          () => ServerUncheckedCreateWithoutServerUserPositionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ServerCreateOrConnectWithoutServerUserPositionInputObjectSchema =
  Schema;
