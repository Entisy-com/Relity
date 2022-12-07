import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ActionSchema } from '../enums/Action.schema';
import { EnumActionFieldUpdateOperationsInputObjectSchema } from './EnumActionFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUncheckedUpdateManyWithoutActionsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      memberId: z
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
      createdAt: z
        .union([
          z.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ActionTypeUncheckedUpdateManyWithoutActionsInputObjectSchema =
  Schema;
