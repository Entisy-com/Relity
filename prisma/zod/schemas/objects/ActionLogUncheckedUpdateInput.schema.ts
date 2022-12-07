import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ActionTypeUncheckedUpdateManyWithoutActionlogNestedInputObjectSchema } from './ActionTypeUncheckedUpdateManyWithoutActionlogNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    serverId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    actions: z
      .lazy(
        () =>
          ActionTypeUncheckedUpdateManyWithoutActionlogNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ActionLogUncheckedUpdateInputObjectSchema = Schema;
