import { z } from 'zod';
import { ServerCreateWithoutActionLogInputObjectSchema } from './ServerCreateWithoutActionLogInput.schema';
import { ServerUncheckedCreateWithoutActionLogInputObjectSchema } from './ServerUncheckedCreateWithoutActionLogInput.schema';
import { ServerCreateOrConnectWithoutActionLogInputObjectSchema } from './ServerCreateOrConnectWithoutActionLogInput.schema';
import { ServerUpsertWithoutActionLogInputObjectSchema } from './ServerUpsertWithoutActionLogInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutActionLogInputObjectSchema } from './ServerUpdateWithoutActionLogInput.schema';
import { ServerUncheckedUpdateWithoutActionLogInputObjectSchema } from './ServerUncheckedUpdateWithoutActionLogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateOneRequiredWithoutActionLogNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerCreateWithoutActionLogInputObjectSchema),
          z.lazy(() => ServerUncheckedCreateWithoutActionLogInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ServerCreateOrConnectWithoutActionLogInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ServerUpsertWithoutActionLogInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ServerUpdateWithoutActionLogInputObjectSchema),
          z.lazy(() => ServerUncheckedUpdateWithoutActionLogInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ServerUpdateOneRequiredWithoutActionLogNestedInputObjectSchema =
  Schema;
