import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ServerUpdateOneRequiredWithoutActionLogNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutActionLogNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionLogUpdateWithoutActionsInput> = z
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
  })
  .strict();

export const ActionLogUpdateWithoutActionsInputObjectSchema = Schema;
