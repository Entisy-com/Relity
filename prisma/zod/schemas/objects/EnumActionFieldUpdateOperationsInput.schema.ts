import { z } from 'zod';
import { ActionSchema } from '../enums/Action.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumActionFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => ActionSchema).optional(),
  })
  .strict();

export const EnumActionFieldUpdateOperationsInputObjectSchema = Schema;
