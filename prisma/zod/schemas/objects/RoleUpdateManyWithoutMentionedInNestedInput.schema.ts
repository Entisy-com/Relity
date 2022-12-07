import { z } from 'zod';
import { RoleCreateWithoutMentionedInInputObjectSchema } from './RoleCreateWithoutMentionedInInput.schema';
import { RoleUncheckedCreateWithoutMentionedInInputObjectSchema } from './RoleUncheckedCreateWithoutMentionedInInput.schema';
import { RoleCreateOrConnectWithoutMentionedInInputObjectSchema } from './RoleCreateOrConnectWithoutMentionedInInput.schema';
import { RoleUpsertWithWhereUniqueWithoutMentionedInInputObjectSchema } from './RoleUpsertWithWhereUniqueWithoutMentionedInInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithWhereUniqueWithoutMentionedInInputObjectSchema } from './RoleUpdateWithWhereUniqueWithoutMentionedInInput.schema';
import { RoleUpdateManyWithWhereWithoutMentionedInInputObjectSchema } from './RoleUpdateManyWithWhereWithoutMentionedInInput.schema';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateManyWithoutMentionedInNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => RoleUpsertWithWhereUniqueWithoutMentionedInInputObjectSchema,
        ),
        z
          .lazy(
            () => RoleUpsertWithWhereUniqueWithoutMentionedInInputObjectSchema,
          )
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
        z.lazy(
          () => RoleUpdateWithWhereUniqueWithoutMentionedInInputObjectSchema,
        ),
        z
          .lazy(
            () => RoleUpdateWithWhereUniqueWithoutMentionedInInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => RoleUpdateManyWithWhereWithoutMentionedInInputObjectSchema,
        ),
        z
          .lazy(
            () => RoleUpdateManyWithWhereWithoutMentionedInInputObjectSchema,
          )
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

export const RoleUpdateManyWithoutMentionedInNestedInputObjectSchema = Schema;
