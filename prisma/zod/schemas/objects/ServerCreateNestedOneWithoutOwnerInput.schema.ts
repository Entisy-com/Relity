import { z } from 'zod';
import { ServerCreateWithoutOwnerInputObjectSchema } from './ServerCreateWithoutOwnerInput.schema';
import { ServerUncheckedCreateWithoutOwnerInputObjectSchema } from './ServerUncheckedCreateWithoutOwnerInput.schema';
import { ServerCreateOrConnectWithoutOwnerInputObjectSchema } from './ServerCreateOrConnectWithoutOwnerInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateNestedOneWithoutOwnerInput> = z
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
    connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ServerCreateNestedOneWithoutOwnerInputObjectSchema = Schema;
