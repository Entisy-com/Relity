import { z } from 'zod';
import { RoleUncheckedCreateNestedManyWithoutMembersInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutMembersInput.schema';
import { ServerUncheckedCreateNestedOneWithoutOwnerInputObjectSchema } from './ServerUncheckedCreateNestedOneWithoutOwnerInput.schema';
import { ActionTypeUncheckedCreateNestedManyWithoutMemberInputObjectSchema } from './ActionTypeUncheckedCreateNestedManyWithoutMemberInput.schema';
import { MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUncheckedCreateWithoutMentionedInInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    pfp: z.string().optional().nullable(),
    banner: z.string().optional().nullable(),
    nickname: z.string().optional().nullable(),
    roles: z
      .lazy(() => RoleUncheckedCreateNestedManyWithoutMembersInputObjectSchema)
      .optional(),
    ownerOf: z
      .lazy(() => ServerUncheckedCreateNestedOneWithoutOwnerInputObjectSchema)
      .optional(),
    actionType: z
      .lazy(
        () => ActionTypeUncheckedCreateNestedManyWithoutMemberInputObjectSchema,
      )
      .optional(),
    messages: z
      .lazy(
        () => MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema,
      )
      .optional(),
    voiceChannelId: z.string().optional().nullable(),
    serverId: z.string().optional().nullable(),
  })
  .strict();

export const MemberUncheckedCreateWithoutMentionedInInputObjectSchema = Schema;
