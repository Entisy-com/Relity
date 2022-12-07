import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutActionLogInputObjectSchema } from './ServerCreateWithoutActionLogInput.schema';
import { ServerUncheckedCreateWithoutActionLogInputObjectSchema } from './ServerUncheckedCreateWithoutActionLogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateOrConnectWithoutActionLogInput> = z
  .object({
    where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ServerCreateWithoutActionLogInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutActionLogInputObjectSchema),
    ]),
  })
  .strict();

export const ServerCreateOrConnectWithoutActionLogInputObjectSchema = Schema;
