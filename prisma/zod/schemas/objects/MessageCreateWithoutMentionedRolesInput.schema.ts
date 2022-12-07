import { z } from 'zod';
import { MemberCreateNestedOneWithoutMessagesInputObjectSchema } from './MemberCreateNestedOneWithoutMessagesInput.schema';
import { TextChannelCreateNestedOneWithoutMessagesInputObjectSchema } from './TextChannelCreateNestedOneWithoutMessagesInput.schema';
import { MemberCreateNestedManyWithoutMentionedInInputObjectSchema } from './MemberCreateNestedManyWithoutMentionedInInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateWithoutMentionedRolesInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    color: z.string().optional().nullable(),
    backgroundColor: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    author: z.lazy(() => MemberCreateNestedOneWithoutMessagesInputObjectSchema),
    textChannel: z.lazy(
      () => TextChannelCreateNestedOneWithoutMessagesInputObjectSchema,
    ),
    mentionedMembers: z
      .lazy(() => MemberCreateNestedManyWithoutMentionedInInputObjectSchema)
      .optional(),
  })
  .strict();

export const MessageCreateWithoutMentionedRolesInputObjectSchema = Schema;
