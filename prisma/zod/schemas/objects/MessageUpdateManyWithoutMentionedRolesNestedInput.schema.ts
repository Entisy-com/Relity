import { z } from 'zod';
import { MessageCreateWithoutMentionedRolesInputObjectSchema } from './MessageCreateWithoutMentionedRolesInput.schema';
import { MessageUncheckedCreateWithoutMentionedRolesInputObjectSchema } from './MessageUncheckedCreateWithoutMentionedRolesInput.schema';
import { MessageCreateOrConnectWithoutMentionedRolesInputObjectSchema } from './MessageCreateOrConnectWithoutMentionedRolesInput.schema';
import { MessageUpsertWithWhereUniqueWithoutMentionedRolesInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutMentionedRolesInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutMentionedRolesInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutMentionedRolesInput.schema';
import { MessageUpdateManyWithWhereWithoutMentionedRolesInputObjectSchema } from './MessageUpdateManyWithWhereWithoutMentionedRolesInput.schema';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateManyWithoutMentionedRolesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutMentionedRolesInputObjectSchema),
          z
            .lazy(() => MessageCreateWithoutMentionedRolesInputObjectSchema)
            .array(),
          z.lazy(
            () => MessageUncheckedCreateWithoutMentionedRolesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUncheckedCreateWithoutMentionedRolesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MessageCreateOrConnectWithoutMentionedRolesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageCreateOrConnectWithoutMentionedRolesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MessageUpsertWithWhereUniqueWithoutMentionedRolesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpsertWithWhereUniqueWithoutMentionedRolesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MessageUpdateWithWhereUniqueWithoutMentionedRolesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpdateWithWhereUniqueWithoutMentionedRolesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MessageUpdateManyWithWhereWithoutMentionedRolesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpdateManyWithWhereWithoutMentionedRolesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MessageScalarWhereInputObjectSchema),
          z.lazy(() => MessageScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageUpdateManyWithoutMentionedRolesNestedInputObjectSchema =
  Schema;
