import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutMentionedMembersInputObjectSchema } from './MessageCreateWithoutMentionedMembersInput.schema';
import { MessageUncheckedCreateWithoutMentionedMembersInputObjectSchema } from './MessageUncheckedCreateWithoutMentionedMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutMentionedMembersInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MessageCreateWithoutMentionedMembersInputObjectSchema),
        z.lazy(
          () => MessageUncheckedCreateWithoutMentionedMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageCreateOrConnectWithoutMentionedMembersInputObjectSchema =
  Schema;
