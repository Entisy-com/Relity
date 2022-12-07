import { z } from 'zod';
import { RoleCreateWithoutServerInputObjectSchema } from './RoleCreateWithoutServerInput.schema';
import { RoleUncheckedCreateWithoutServerInputObjectSchema } from './RoleUncheckedCreateWithoutServerInput.schema';
import { RoleCreateOrConnectWithoutServerInputObjectSchema } from './RoleCreateOrConnectWithoutServerInput.schema';
import { RoleCreateManyServerInputEnvelopeObjectSchema } from './RoleCreateManyServerInputEnvelope.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateNestedManyWithoutServerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutServerInputObjectSchema),
        z.lazy(() => RoleCreateWithoutServerInputObjectSchema).array(),
        z.lazy(() => RoleUncheckedCreateWithoutServerInputObjectSchema),
        z.lazy(() => RoleUncheckedCreateWithoutServerInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoleCreateOrConnectWithoutServerInputObjectSchema),
        z.lazy(() => RoleCreateOrConnectWithoutServerInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoleCreateManyServerInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoleWhereUniqueInputObjectSchema),
        z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const RoleCreateNestedManyWithoutServerInputObjectSchema = Schema;
