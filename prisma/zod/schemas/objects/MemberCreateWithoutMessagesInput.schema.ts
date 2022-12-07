import { z } from 'zod';
import { UserCreateNestedOneWithoutMemberInputObjectSchema } from './UserCreateNestedOneWithoutMemberInput.schema';
import { RoleCreateNestedManyWithoutMembersInputObjectSchema } from './RoleCreateNestedManyWithoutMembersInput.schema';
import { ServerCreateNestedOneWithoutOwnerInputObjectSchema } from './ServerCreateNestedOneWithoutOwnerInput.schema';
import { ServerCreateNestedOneWithoutMembersInputObjectSchema } from './ServerCreateNestedOneWithoutMembersInput.schema';
import { ActionTypeCreateNestedManyWithoutMemberInputObjectSchema } from './ActionTypeCreateNestedManyWithoutMemberInput.schema';
import { MessageCreateNestedManyWithoutMentionedMembersInputObjectSchema } from './MessageCreateNestedManyWithoutMentionedMembersInput.schema';
import { VoiceChannelCreateNestedOneWithoutMembersInputObjectSchema } from './VoiceChannelCreateNestedOneWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateWithoutMessagesInput> = z
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
    server: z
      .lazy(() => ServerCreateNestedOneWithoutMembersInputObjectSchema)
      .optional(),
    actionType: z
      .lazy(() => ActionTypeCreateNestedManyWithoutMemberInputObjectSchema)
      .optional(),
    mentionedIn: z
      .lazy(
        () => MessageCreateNestedManyWithoutMentionedMembersInputObjectSchema,
      )
      .optional(),
    voiceChannel: z
      .lazy(() => VoiceChannelCreateNestedOneWithoutMembersInputObjectSchema)
      .optional(),
  })
  .strict();

export const MemberCreateWithoutMessagesInputObjectSchema = Schema;
