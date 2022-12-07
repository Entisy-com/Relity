import { z } from 'zod';
import { ServerCreateWithoutActionLogInputObjectSchema } from './ServerCreateWithoutActionLogInput.schema';
import { ServerUncheckedCreateWithoutActionLogInputObjectSchema } from './ServerUncheckedCreateWithoutActionLogInput.schema';
import { ServerCreateOrConnectWithoutActionLogInputObjectSchema } from './ServerCreateOrConnectWithoutActionLogInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateNestedOneWithoutActionLogInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ServerCreateWithoutActionLogInputObjectSchema),
        z.lazy(() => ServerUncheckedCreateWithoutActionLogInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ServerCreateOrConnectWithoutActionLogInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ServerCreateNestedOneWithoutActionLogInputObjectSchema = Schema;
