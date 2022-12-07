import { z } from 'zod';
import { ServerCreateWithoutRolesInputObjectSchema } from './ServerCreateWithoutRolesInput.schema';
import { ServerUncheckedCreateWithoutRolesInputObjectSchema } from './ServerUncheckedCreateWithoutRolesInput.schema';
import { ServerCreateOrConnectWithoutRolesInputObjectSchema } from './ServerCreateOrConnectWithoutRolesInput.schema';
import { ServerUpsertWithoutRolesInputObjectSchema } from './ServerUpsertWithoutRolesInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutRolesInputObjectSchema } from './ServerUpdateWithoutRolesInput.schema';
import { ServerUncheckedUpdateWithoutRolesInputObjectSchema } from './ServerUncheckedUpdateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateOneRequiredWithoutRolesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerCreateWithoutRolesInputObjectSchema),
          z.lazy(() => ServerUncheckedCreateWithoutRolesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ServerCreateOrConnectWithoutRolesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ServerUpsertWithoutRolesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ServerUpdateWithoutRolesInputObjectSchema),
          z.lazy(() => ServerUncheckedUpdateWithoutRolesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ServerUpdateOneRequiredWithoutRolesNestedInputObjectSchema =
  Schema;
