import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RoleUncheckedUpdateManyWithoutMembersNestedInputObjectSchema } from './RoleUncheckedUpdateManyWithoutMembersNestedInput.schema';
import { ServerUncheckedUpdateOneWithoutOwnerNestedInputObjectSchema } from './ServerUncheckedUpdateOneWithoutOwnerNestedInput.schema';
import { ActionTypeUncheckedUpdateManyWithoutMemberNestedInputObjectSchema } from './ActionTypeUncheckedUpdateManyWithoutMemberNestedInput.schema';
import { MessageUncheckedUpdateManyWithoutMentionedMembersNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutMentionedMembersNestedInput.schema';
import { MessageUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutAuthorNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutUserInput> = z
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
      .lazy(() => RoleUncheckedUpdateManyWithoutMembersNestedInputObjectSchema)
      .optional(),
    ownerOf: z
      .lazy(() => ServerUncheckedUpdateOneWithoutOwnerNestedInputObjectSchema)
      .optional(),
    actionType: z
      .lazy(
        () => ActionTypeUncheckedUpdateManyWithoutMemberNestedInputObjectSchema,
      )
      .optional(),
    mentionedIn: z
      .lazy(
        () =>
          MessageUncheckedUpdateManyWithoutMentionedMembersNestedInputObjectSchema,
      )
      .optional(),
    messages: z
      .lazy(
        () => MessageUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema,
      )
      .optional(),
    voiceChannelId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    serverId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const MemberUncheckedUpdateWithoutUserInputObjectSchema = Schema;
