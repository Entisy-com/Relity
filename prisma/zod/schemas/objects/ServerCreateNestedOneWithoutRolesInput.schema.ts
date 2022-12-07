import { z } from 'zod';
import { ServerCreateWithoutRolesInputObjectSchema } from './ServerCreateWithoutRolesInput.schema';
import { ServerUncheckedCreateWithoutRolesInputObjectSchema } from './ServerUncheckedCreateWithoutRolesInput.schema';
import { ServerCreateOrConnectWithoutRolesInputObjectSchema } from './ServerCreateOrConnectWithoutRolesInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateNestedOneWithoutRolesInput> = z
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
    connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ServerCreateNestedOneWithoutRolesInputObjectSchema = Schema;
