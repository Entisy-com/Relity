import { z } from 'zod';
import { UserCreateNestedOneWithoutMemberInputObjectSchema } from './UserCreateNestedOneWithoutMemberInput.schema';
import { RoleCreateNestedManyWithoutMembersInputObjectSchema } from './RoleCreateNestedManyWithoutMembersInput.schema';
import { ServerCreateNestedOneWithoutOwnerInputObjectSchema } from './ServerCreateNestedOneWithoutOwnerInput.schema';
import { ActionTypeCreateNestedManyWithoutMemberInputObjectSchema } from './ActionTypeCreateNestedManyWithoutMemberInput.schema';
import { MessageCreateNestedManyWithoutMentionedMembersInputObjectSchema } from './MessageCreateNestedManyWithoutMentionedMembersInput.schema';
import { MessageCreateNestedManyWithoutAuthorInputObjectSchema } from './MessageCreateNestedManyWithoutAuthorInput.schema';
import { VoiceChannelCreateNestedOneWithoutMembersInputObjectSchema } from './VoiceChannelCreateNestedOneWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateWithoutServerInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutMemberInputObjectSchema),
    pfp: z.string().optional().nullable(),
    banner: z.string().optional().nullable(),
    nickname: z.string().optional().nullable(),
    roles: z
      .lazy(() => RoleCreateNestedManyWithoutMembersInputObjectSchema)
      .optional(),
    ownerOf: z
      .lazy(() => ServerCreateNestedOneWithoutOwnerInputObjectSchema)
      .optional(),
    actionType: z
      .lazy(() => ActionTypeCreateNestedManyWithoutMemberInputObjectSchema)
      .optional(),
    mentionedIn: z
      .lazy(
        () => MessageCreateNestedManyWithoutMentionedMembersInputObjectSchema,
      )
      .optional(),
    messages: z
      .lazy(() => MessageCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    voiceChannel: z
      .lazy(() => VoiceChannelCreateNestedOneWithoutMembersInputObjectSchema)
      .optional(),
  })
  .strict();

export const MemberCreateWithoutServerInputObjectSchema = Schema;
