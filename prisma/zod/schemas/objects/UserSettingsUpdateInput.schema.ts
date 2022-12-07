import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutSettingsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSettingsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutSettingsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserSettingsUpdateInputObjectSchema = Schema;
