import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ActionTypeUpdateManyWithoutActionlogNestedInputObjectSchema } from './ActionTypeUpdateManyWithoutActionlogNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUpdateWithoutServerInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    actions: z
      .lazy(() => ActionTypeUpdateManyWithoutActionlogNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ActionLogUpdateWithoutServerInputObjectSchema = Schema;
