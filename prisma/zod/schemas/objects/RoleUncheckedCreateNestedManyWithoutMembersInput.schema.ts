import { z } from 'zod';
import { RoleCreateWithoutMembersInputObjectSchema } from './RoleCreateWithoutMembersInput.schema';
import { RoleUncheckedCreateWithoutMembersInputObjectSchema } from './RoleUncheckedCreateWithoutMembersInput.schema';
import { RoleCreateOrConnectWithoutMembersInputObjectSchema } from './RoleCreateOrConnectWithoutMembersInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutMembersInput> =
  z
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
      connect: z
        .union([
          z.lazy(() => RoleWhereUniqueInputObjectSchema),
          z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RoleUncheckedCreateNestedManyWithoutMembersInputObjectSchema =
  Schema;
