import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutRolesInputObjectSchema } from './ServerCreateWithoutRolesInput.schema';
import { ServerUncheckedCreateWithoutRolesInputObjectSchema } from './ServerUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateOrConnectWithoutRolesInput> = z
  .object({
    where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ServerCreateWithoutRolesInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const ServerCreateOrConnectWithoutRolesInputObjectSchema = Schema;
