import { z } from 'zod';
import { TextChannelCreateNestedOneWithoutMessagesInputObjectSchema } from './TextChannelCreateNestedOneWithoutMessagesInput.schema';
import { RoleCreateNestedManyWithoutMentionedInInputObjectSchema } from './RoleCreateNestedManyWithoutMentionedInInput.schema';
import { MemberCreateNestedManyWithoutMentionedInInputObjectSchema } from './MemberCreateNestedManyWithoutMentionedInInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateWithoutAuthorInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    color: z.string().optional().nullable(),
    backgroundColor: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    textChannel: z.lazy(
      () => TextChannelCreateNestedOneWithoutMessagesInputObjectSchema,
    ),
    mentionedRoles: z
      .lazy(() => RoleCreateNestedManyWithoutMentionedInInputObjectSchema)
      .optional(),
    mentionedMembers: z
      .lazy(() => MemberCreateNestedManyWithoutMentionedInInputObjectSchema)
      .optional(),
  })
  .strict();

export const MessageCreateWithoutAuthorInputObjectSchema = Schema;
