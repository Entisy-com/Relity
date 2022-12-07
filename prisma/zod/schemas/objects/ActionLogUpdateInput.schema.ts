import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ServerUpdateOneRequiredWithoutActionLogNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutActionLogNestedInput.schema';
import { ActionTypeUpdateManyWithoutActionlogNestedInputObjectSchema } from './ActionTypeUpdateManyWithoutActionlogNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    server: z
      .lazy(
        () => ServerUpdateOneRequiredWithoutActionLogNestedInputObjectSchema,
      )
      .optional(),
    actions: z
      .lazy(() => ActionTypeUpdateManyWithoutActionlogNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ActionLogUpdateInputObjectSchema = Schema;
