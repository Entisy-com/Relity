import { z } from 'zod';
import { RoleCreateWithoutServerInputObjectSchema } from './RoleCreateWithoutServerInput.schema';
import { RoleUncheckedCreateWithoutServerInputObjectSchema } from './RoleUncheckedCreateWithoutServerInput.schema';
import { RoleCreateOrConnectWithoutServerInputObjectSchema } from './RoleCreateOrConnectWithoutServerInput.schema';
import { RoleUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './RoleUpsertWithWhereUniqueWithoutServerInput.schema';
import { RoleCreateManyServerInputEnvelopeObjectSchema } from './RoleCreateManyServerInputEnvelope.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './RoleUpdateWithWhereUniqueWithoutServerInput.schema';
import { RoleUpdateManyWithWhereWithoutServerInputObjectSchema } from './RoleUpdateManyWithWhereWithoutServerInput.schema';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateManyWithoutServerNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => RoleUpsertWithWhereUniqueWithoutServerInputObjectSchema),
        z
          .lazy(() => RoleUpsertWithWhereUniqueWithoutServerInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoleCreateManyServerInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoleWhereUniqueInputObjectSchema),
        z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoleWhereUniqueInputObjectSchema),
        z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoleWhereUniqueInputObjectSchema),
        z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoleWhereUniqueInputObjectSchema),
        z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RoleUpdateWithWhereUniqueWithoutServerInputObjectSchema),
        z
          .lazy(() => RoleUpdateWithWhereUniqueWithoutServerInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RoleUpdateManyWithWhereWithoutServerInputObjectSchema),
        z
          .lazy(() => RoleUpdateManyWithWhereWithoutServerInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoleScalarWhereInputObjectSchema),
        z.lazy(() => RoleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const RoleUpdateManyWithoutServerNestedInputObjectSchema = Schema;
