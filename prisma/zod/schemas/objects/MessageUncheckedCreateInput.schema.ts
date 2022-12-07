import { z } from 'zod';
import { RoleUncheckedCreateNestedManyWithoutMentionedInInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutMentionedInInput.schema';
import { MemberUncheckedCreateNestedManyWithoutMentionedInInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutMentionedInInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    authorId: z.string(),
    color: z.string().optional().nullable(),
    backgroundColor: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    textChannelId: z.string(),
    mentionedRoles: z
      .lazy(
        () => RoleUncheckedCreateNestedManyWithoutMentionedInInputObjectSchema,
      )
      .optional(),
    mentionedMembers: z
      .lazy(
        () =>
          MemberUncheckedCreateNestedManyWithoutMentionedInInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MessageUncheckedCreateInputObjectSchema = Schema;
