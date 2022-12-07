import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutOwnerInputObjectSchema } from './ServerCreateWithoutOwnerInput.schema';
import { ServerUncheckedCreateWithoutOwnerInputObjectSchema } from './ServerUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateOrConnectWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ServerCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const ServerCreateOrConnectWithoutOwnerInputObjectSchema = Schema;
