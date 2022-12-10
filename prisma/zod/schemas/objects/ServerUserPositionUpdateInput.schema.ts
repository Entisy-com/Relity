import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ServerUpdateOneRequiredWithoutServerUserPositionNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutServerUserPositionNestedInput.schema';
import { UserUpdateOneRequiredWithoutServerUserPositionNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutServerUserPositionNestedInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    server: z
      .lazy(
        () =>
          ServerUpdateOneRequiredWithoutServerUserPositionNestedInputObjectSchema,
      )
      .optional(),
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutServerUserPositionNestedInputObjectSchema,
      )
      .optional(),
    position: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ServerUserPositionUpdateInputObjectSchema = Schema;
