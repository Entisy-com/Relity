import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutMentionedMembersInputObjectSchema } from './MessageUpdateWithoutMentionedMembersInput.schema';
import { MessageUncheckedUpdateWithoutMentionedMembersInputObjectSchema } from './MessageUncheckedUpdateWithoutMentionedMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutMentionedMembersInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateWithoutMentionedMembersInputObjectSchema),
        z.lazy(
          () => MessageUncheckedUpdateWithoutMentionedMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageUpdateWithWhereUniqueWithoutMentionedMembersInputObjectSchema =
  Schema;
