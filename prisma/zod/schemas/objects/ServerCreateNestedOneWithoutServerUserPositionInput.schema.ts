import { z } from 'zod';
import { ServerCreateWithoutServerUserPositionInputObjectSchema } from './ServerCreateWithoutServerUserPositionInput.schema';
import { ServerUncheckedCreateWithoutServerUserPositionInputObjectSchema } from './ServerUncheckedCreateWithoutServerUserPositionInput.schema';
import { ServerCreateOrConnectWithoutServerUserPositionInputObjectSchema } from './ServerCreateOrConnectWithoutServerUserPositionInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateNestedOneWithoutServerUserPositionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerCreateWithoutServerUserPositionInputObjectSchema),
          z.lazy(
            () =>
              ServerUncheckedCreateWithoutServerUserPositionInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ServerCreateOrConnectWithoutServerUserPositionInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ServerCreateNestedOneWithoutServerUserPositionInputObjectSchema =
  Schema;
