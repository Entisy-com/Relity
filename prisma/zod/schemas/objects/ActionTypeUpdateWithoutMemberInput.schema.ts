import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ActionSchema } from '../enums/Action.schema';
import { EnumActionFieldUpdateOperationsInputObjectSchema } from './EnumActionFieldUpdateOperationsInput.schema';
import { ActionLogUpdateOneRequiredWithoutActionsNestedInputObjectSchema } from './ActionLogUpdateOneRequiredWithoutActionsNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUpdateWithoutMemberInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    action: z
      .union([
        z.lazy(() => ActionSchema),
        z.lazy(() => EnumActionFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    actionlog: z
      .lazy(
        () => ActionLogUpdateOneRequiredWithoutActionsNestedInputObjectSchema,
      )
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ActionTypeUpdateWithoutMemberInputObjectSchema = Schema;
