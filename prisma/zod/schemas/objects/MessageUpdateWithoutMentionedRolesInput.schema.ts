import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MemberUpdateOneRequiredWithoutMessagesNestedInputObjectSchema } from './MemberUpdateOneRequiredWithoutMessagesNestedInput.schema';
import { TextChannelUpdateOneRequiredWithoutMessagesNestedInputObjectSchema } from './TextChannelUpdateOneRequiredWithoutMessagesNestedInput.schema';
import { MemberUpdateManyWithoutMentionedInNestedInputObjectSchema } from './MemberUpdateManyWithoutMentionedInNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithoutMentionedRolesInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    content: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    color: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    backgroundColor: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    author: z
      .lazy(() => MemberUpdateOneRequiredWithoutMessagesNestedInputObjectSchema)
      .optional(),
    textChannel: z
      .lazy(
        () =>
          TextChannelUpdateOneRequiredWithoutMessagesNestedInputObjectSchema,
      )
      .optional(),
    mentionedMembers: z
      .lazy(() => MemberUpdateManyWithoutMentionedInNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MessageUpdateWithoutMentionedRolesInputObjectSchema = Schema;
