import { z } from 'zod';
import { MessageCreateWithoutMentionedMembersInputObjectSchema } from './MessageCreateWithoutMentionedMembersInput.schema';
import { MessageUncheckedCreateWithoutMentionedMembersInputObjectSchema } from './MessageUncheckedCreateWithoutMentionedMembersInput.schema';
import { MessageCreateOrConnectWithoutMentionedMembersInputObjectSchema } from './MessageCreateOrConnectWithoutMentionedMembersInput.schema';
import { MessageUpsertWithWhereUniqueWithoutMentionedMembersInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutMentionedMembersInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutMentionedMembersInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutMentionedMembersInput.schema';
import { MessageUpdateManyWithWhereWithoutMentionedMembersInputObjectSchema } from './MessageUpdateManyWithWhereWithoutMentionedMembersInput.schema';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateManyWithoutMentionedMembersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutMentionedMembersInputObjectSchema),
          z
            .lazy(() => MessageCreateWithoutMentionedMembersInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              MessageUncheckedCreateWithoutMentionedMembersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUncheckedCreateWithoutMentionedMembersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              MessageCreateOrConnectWithoutMentionedMembersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageCreateOrConnectWithoutMentionedMembersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MessageUpsertWithWhereUniqueWithoutMentionedMembersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpsertWithWhereUniqueWithoutMentionedMembersInputObjectSchema,
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
              MessageUpdateWithWhereUniqueWithoutMentionedMembersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpdateWithWhereUniqueWithoutMentionedMembersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MessageUpdateManyWithWhereWithoutMentionedMembersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpdateManyWithWhereWithoutMentionedMembersInputObjectSchema,
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

export const MessageUpdateManyWithoutMentionedMembersNestedInputObjectSchema =
  Schema;
