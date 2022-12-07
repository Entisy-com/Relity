import { z } from 'zod';
import { ServerUpdateWithoutActionLogInputObjectSchema } from './ServerUpdateWithoutActionLogInput.schema';
import { ServerUncheckedUpdateWithoutActionLogInputObjectSchema } from './ServerUncheckedUpdateWithoutActionLogInput.schema';
import { ServerCreateWithoutActionLogInputObjectSchema } from './ServerCreateWithoutActionLogInput.schema';
import { ServerUncheckedCreateWithoutActionLogInputObjectSchema } from './ServerUncheckedCreateWithoutActionLogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpsertWithoutActionLogInput> = z
  .object({
    update: z.union([
      z.lazy(() => ServerUpdateWithoutActionLogInputObjectSchema),
      z.lazy(() => ServerUncheckedUpdateWithoutActionLogInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ServerCreateWithoutActionLogInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutActionLogInputObjectSchema),
    ]),
  })
  .strict();

export const ServerUpsertWithoutActionLogInputObjectSchema = Schema;
