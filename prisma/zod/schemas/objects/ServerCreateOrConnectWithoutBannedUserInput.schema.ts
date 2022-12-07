import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutBannedUserInputObjectSchema } from './ServerCreateWithoutBannedUserInput.schema';
import { ServerUncheckedCreateWithoutBannedUserInputObjectSchema } from './ServerUncheckedCreateWithoutBannedUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateOrConnectWithoutBannedUserInput> = z
  .object({
    where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ServerCreateWithoutBannedUserInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutBannedUserInputObjectSchema),
    ]),
  })
  .strict();

export const ServerCreateOrConnectWithoutBannedUserInputObjectSchema = Schema;
