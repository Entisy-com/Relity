import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutMentionedMembersInputObjectSchema } from './MessageUpdateWithoutMentionedMembersInput.schema';
import { MessageUncheckedUpdateWithoutMentionedMembersInputObjectSchema } from './MessageUncheckedUpdateWithoutMentionedMembersInput.schema';
import { MessageCreateWithoutMentionedMembersInputObjectSchema } from './MessageCreateWithoutMentionedMembersInput.schema';
import { MessageUncheckedCreateWithoutMentionedMembersInputObjectSchema } from './MessageUncheckedCreateWithoutMentionedMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutMentionedMembersInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MessageUpdateWithoutMentionedMembersInputObjectSchema),
        z.lazy(
          () => MessageUncheckedUpdateWithoutMentionedMembersInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MessageCreateWithoutMentionedMembersInputObjectSchema),
        z.lazy(
          () => MessageUncheckedCreateWithoutMentionedMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageUpsertWithWhereUniqueWithoutMentionedMembersInputObjectSchema =
  Schema;
