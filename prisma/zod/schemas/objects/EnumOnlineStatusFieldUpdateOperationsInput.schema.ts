import { z } from 'zod';
import { OnlineStatusSchema } from '../enums/OnlineStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumOnlineStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => OnlineStatusSchema).optional(),
  })
  .strict();

export const EnumOnlineStatusFieldUpdateOperationsInputObjectSchema = Schema;
