import { z } from 'zod';
import { ServerUpdateWithoutOwnerInputObjectSchema } from './ServerUpdateWithoutOwnerInput.schema';
import { ServerUncheckedUpdateWithoutOwnerInputObjectSchema } from './ServerUncheckedUpdateWithoutOwnerInput.schema';
import { ServerCreateWithoutOwnerInputObjectSchema } from './ServerCreateWithoutOwnerInput.schema';
import { ServerUncheckedCreateWithoutOwnerInputObjectSchema } from './ServerUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpsertWithoutOwnerInput> = z
  .object({
    update: z.union([
      z.lazy(() => ServerUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => ServerUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ServerCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const ServerUpsertWithoutOwnerInputObjectSchema = Schema;
