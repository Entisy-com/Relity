import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RoleUncheckedUpdateManyWithoutMentionedInNestedInputObjectSchema } from './RoleUncheckedUpdateManyWithoutMentionedInNestedInput.schema';
import { MemberUncheckedUpdateManyWithoutMentionedInNestedInputObjectSchema } from './MemberUncheckedUpdateManyWithoutMentionedInNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedUpdateInput> = z
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
    authorId: z
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
    textChannelId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    mentionedRoles: z
      .lazy(
        () => RoleUncheckedUpdateManyWithoutMentionedInNestedInputObjectSchema,
      )
      .optional(),
    mentionedMembers: z
      .lazy(
        () =>
          MemberUncheckedUpdateManyWithoutMentionedInNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MessageUncheckedUpdateInputObjectSchema = Schema;
