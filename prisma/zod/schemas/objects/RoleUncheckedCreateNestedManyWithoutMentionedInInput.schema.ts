import { z } from 'zod';
import { RoleCreateWithoutMentionedInInputObjectSchema } from './RoleCreateWithoutMentionedInInput.schema';
import { RoleUncheckedCreateWithoutMentionedInInputObjectSchema } from './RoleUncheckedCreateWithoutMentionedInInput.schema';
import { RoleCreateOrConnectWithoutMentionedInInputObjectSchema } from './RoleCreateOrConnectWithoutMentionedInInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutMentionedInInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutMentionedInInputObjectSchema),
          z.lazy(() => RoleCreateWithoutMentionedInInputObjectSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutMentionedInInputObjectSchema),
          z
            .lazy(() => RoleUncheckedCreateWithoutMentionedInInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutMentionedInInputObjectSchema),
          z
            .lazy(() => RoleCreateOrConnectWithoutMentionedInInputObjectSchema)
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

export const RoleUncheckedCreateNestedManyWithoutMentionedInInputObjectSchema =
  Schema;
