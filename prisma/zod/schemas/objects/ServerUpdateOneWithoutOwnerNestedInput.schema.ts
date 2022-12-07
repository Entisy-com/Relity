import { z } from 'zod';
import { ServerCreateWithoutOwnerInputObjectSchema } from './ServerCreateWithoutOwnerInput.schema';
import { ServerUncheckedCreateWithoutOwnerInputObjectSchema } from './ServerUncheckedCreateWithoutOwnerInput.schema';
import { ServerCreateOrConnectWithoutOwnerInputObjectSchema } from './ServerCreateOrConnectWithoutOwnerInput.schema';
import { ServerUpsertWithoutOwnerInputObjectSchema } from './ServerUpsertWithoutOwnerInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutOwnerInputObjectSchema } from './ServerUpdateWithoutOwnerInput.schema';
import { ServerUncheckedUpdateWithoutOwnerInputObjectSchema } from './ServerUncheckedUpdateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateOneWithoutOwnerNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ServerCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => ServerUncheckedCreateWithoutOwnerInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ServerCreateOrConnectWithoutOwnerInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => ServerUpsertWithoutOwnerInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ServerUpdateWithoutOwnerInputObjectSchema),
        z.lazy(() => ServerUncheckedUpdateWithoutOwnerInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ServerUpdateOneWithoutOwnerNestedInputObjectSchema = Schema;
