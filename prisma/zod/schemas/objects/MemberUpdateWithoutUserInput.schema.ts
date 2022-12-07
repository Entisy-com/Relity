import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RoleUpdateManyWithoutMembersNestedInputObjectSchema } from './RoleUpdateManyWithoutMembersNestedInput.schema';
import { ServerUpdateOneWithoutOwnerNestedInputObjectSchema } from './ServerUpdateOneWithoutOwnerNestedInput.schema';
import { ServerUpdateOneWithoutMembersNestedInputObjectSchema } from './ServerUpdateOneWithoutMembersNestedInput.schema';
import { ActionTypeUpdateManyWithoutMemberNestedInputObjectSchema } from './ActionTypeUpdateManyWithoutMemberNestedInput.schema';
import { MessageUpdateManyWithoutMentionedMembersNestedInputObjectSchema } from './MessageUpdateManyWithoutMentionedMembersNestedInput.schema';
import { MessageUpdateManyWithoutAuthorNestedInputObjectSchema } from './MessageUpdateManyWithoutAuthorNestedInput.schema';
import { VoiceChannelUpdateOneWithoutMembersNestedInputObjectSchema } from './VoiceChannelUpdateOneWithoutMembersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pfp: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    banner: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    nickname: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    roles: z
      .lazy(() => RoleUpdateManyWithoutMembersNestedInputObjectSchema)
      .optional(),
    ownerOf: z
      .lazy(() => ServerUpdateOneWithoutOwnerNestedInputObjectSchema)
      .optional(),
    server: z
      .lazy(() => ServerUpdateOneWithoutMembersNestedInputObjectSchema)
      .optional(),
    actionType: z
      .lazy(() => ActionTypeUpdateManyWithoutMemberNestedInputObjectSchema)
      .optional(),
    mentionedIn: z
      .lazy(
        () => MessageUpdateManyWithoutMentionedMembersNestedInputObjectSchema,
      )
      .optional(),
    messages: z
      .lazy(() => MessageUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
    voiceChannel: z
      .lazy(() => VoiceChannelUpdateOneWithoutMembersNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MemberUpdateWithoutUserInputObjectSchema = Schema;
