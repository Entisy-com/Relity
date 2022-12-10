import { z } from 'zod';
import { ServerUserPositionScalarWhereInputObjectSchema } from './ServerUserPositionScalarWhereInput.schema';
import { ServerUserPositionUpdateManyMutationInputObjectSchema } from './ServerUserPositionUpdateManyMutationInput.schema';
import { ServerUserPositionUncheckedUpdateManyWithoutServerUserPositionInputObjectSchema } from './ServerUserPositionUncheckedUpdateManyWithoutServerUserPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ServerUserPositionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ServerUserPositionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ServerUserPositionUncheckedUpdateManyWithoutServerUserPositionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ServerUserPositionUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
