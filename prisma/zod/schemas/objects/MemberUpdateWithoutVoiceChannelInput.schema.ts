import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutMemberNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutMemberNestedInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RoleUpdateManyWithoutMembersNestedInputObjectSchema } from './RoleUpdateManyWithoutMembersNestedInput.schema';
import { ServerUpdateOneWithoutOwnerNestedInputObjectSchema } from './ServerUpdateOneWithoutOwnerNestedInput.schema';
import { ServerUpdateOneWithoutMembersNestedInputObjectSchema } from './ServerUpdateOneWithoutMembersNestedInput.schema';
import { ActionTypeUpdateManyWithoutMemberNestedInputObjectSchema } from './ActionTypeUpdateManyWithoutMemberNestedInput.schema';
import { MessageUpdateManyWithoutMentionedMembersNestedInputObjectSchema } from './MessageUpdateManyWithoutMentionedMembersNestedInput.schema';
import { MessageUpdateManyWithoutAuthorNestedInputObjectSchema } from './MessageUpdateManyWithoutAuthorNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateWithoutVoiceChannelInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutMemberNestedInputObjectSchema)
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
  })
  .strict();

export const MemberUpdateWithoutVoiceChannelInputObjectSchema = Schema;
