import { z } from 'zod';
import { RoleCreateWithoutMembersInputObjectSchema } from './RoleCreateWithoutMembersInput.schema';
import { RoleUncheckedCreateWithoutMembersInputObjectSchema } from './RoleUncheckedCreateWithoutMembersInput.schema';
import { RoleCreateOrConnectWithoutMembersInputObjectSchema } from './RoleCreateOrConnectWithoutMembersInput.schema';
import { RoleUpsertWithWhereUniqueWithoutMembersInputObjectSchema } from './RoleUpsertWithWhereUniqueWithoutMembersInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithWhereUniqueWithoutMembersInputObjectSchema } from './RoleUpdateWithWhereUniqueWithoutMembersInput.schema';
import { RoleUpdateManyWithWhereWithoutMembersInputObjectSchema } from './RoleUpdateManyWithWhereWithoutMembersInput.schema';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateManyWithoutMembersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutMembersInputObjectSchema),
        z.lazy(() => RoleCreateWithoutMembersInputObjectSchema).array(),
        z.lazy(() => RoleUncheckedCreateWithoutMembersInputObjectSchema),
        z
          .lazy(() => RoleUncheckedCreateWithoutMembersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoleCreateOrConnectWithoutMembersInputObjectSchema),
        z
          .lazy(() => RoleCreateOrConnectWithoutMembersInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RoleUpsertWithWhereUniqueWithoutMembersInputObjectSchema),
        z
          .lazy(() => RoleUpsertWithWhereUniqueWithoutMembersInputObjectSchema)
          .array(),
      ])
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
        z.lazy(() => RoleUpdateWithWhereUniqueWithoutMembersInputObjectSchema),
        z
          .lazy(() => RoleUpdateWithWhereUniqueWithoutMembersInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RoleUpdateManyWithWhereWithoutMembersInputObjectSchema),
        z
          .lazy(() => RoleUpdateManyWithWhereWithoutMembersInputObjectSchema)
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

export const RoleUpdateManyWithoutMembersNestedInputObjectSchema = Schema;
