import { z } from 'zod';
import { ServerUpdateWithoutServerUserPositionInputObjectSchema } from './ServerUpdateWithoutServerUserPositionInput.schema';
import { ServerUncheckedUpdateWithoutServerUserPositionInputObjectSchema } from './ServerUncheckedUpdateWithoutServerUserPositionInput.schema';
import { ServerCreateWithoutServerUserPositionInputObjectSchema } from './ServerCreateWithoutServerUserPositionInput.schema';
import { ServerUncheckedCreateWithoutServerUserPositionInputObjectSchema } from './ServerUncheckedCreateWithoutServerUserPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpsertWithoutServerUserPositionInput> = z
  .object({
    update: z.union([
      z.lazy(() => ServerUpdateWithoutServerUserPositionInputObjectSchema),
      z.lazy(
        () => ServerUncheckedUpdateWithoutServerUserPositionInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ServerCreateWithoutServerUserPositionInputObjectSchema),
      z.lazy(
        () => ServerUncheckedCreateWithoutServerUserPositionInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ServerUpsertWithoutServerUserPositionInputObjectSchema = Schema;
