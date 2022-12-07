import { z } from 'zod';
import { ServerUncheckedCreateNestedOneWithoutOwnerInputObjectSchema } from './ServerUncheckedCreateNestedOneWithoutOwnerInput.schema';
import { ActionTypeUncheckedCreateNestedManyWithoutMemberInputObjectSchema } from './ActionTypeUncheckedCreateNestedManyWithoutMemberInput.schema';
import { MessageUncheckedCreateNestedManyWithoutMentionedMembersInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutMentionedMembersInput.schema';
import { MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUncheckedCreateWithoutRolesInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    pfp: z.string().optional().nullable(),
    banner: z.string().optional().nullable(),
    nickname: z.string().optional().nullable(),
    ownerOf: z
      .lazy(() => ServerUncheckedCreateNestedOneWithoutOwnerInputObjectSchema)
      .optional(),
    actionType: z
      .lazy(
        () => ActionTypeUncheckedCreateNestedManyWithoutMemberInputObjectSchema,
      )
      .optional(),
    mentionedIn: z
      .lazy(
        () =>
          MessageUncheckedCreateNestedManyWithoutMentionedMembersInputObjectSchema,
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

export const MemberUncheckedCreateWithoutRolesInputObjectSchema = Schema;
