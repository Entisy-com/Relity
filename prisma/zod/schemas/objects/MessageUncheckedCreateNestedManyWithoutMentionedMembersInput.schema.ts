import { z } from 'zod';
import { MessageCreateWithoutMentionedMembersInputObjectSchema } from './MessageCreateWithoutMentionedMembersInput.schema';
import { MessageUncheckedCreateWithoutMentionedMembersInputObjectSchema } from './MessageUncheckedCreateWithoutMentionedMembersInput.schema';
import { MessageCreateOrConnectWithoutMentionedMembersInputObjectSchema } from './MessageCreateOrConnectWithoutMentionedMembersInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutMentionedMembersInput> =
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
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageUncheckedCreateNestedManyWithoutMentionedMembersInputObjectSchema =
  Schema;
