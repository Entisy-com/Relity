import { z } from 'zod';
import { ServerUpdateWithoutRolesInputObjectSchema } from './ServerUpdateWithoutRolesInput.schema';
import { ServerUncheckedUpdateWithoutRolesInputObjectSchema } from './ServerUncheckedUpdateWithoutRolesInput.schema';
import { ServerCreateWithoutRolesInputObjectSchema } from './ServerCreateWithoutRolesInput.schema';
import { ServerUncheckedCreateWithoutRolesInputObjectSchema } from './ServerUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpsertWithoutRolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ServerUpdateWithoutRolesInputObjectSchema),
      z.lazy(() => ServerUncheckedUpdateWithoutRolesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ServerCreateWithoutRolesInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const ServerUpsertWithoutRolesInputObjectSchema = Schema;
