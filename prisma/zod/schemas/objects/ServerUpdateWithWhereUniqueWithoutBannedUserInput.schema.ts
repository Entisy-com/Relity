import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutBannedUserInputObjectSchema } from './ServerUpdateWithoutBannedUserInput.schema';
import { ServerUncheckedUpdateWithoutBannedUserInputObjectSchema } from './ServerUncheckedUpdateWithoutBannedUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateWithWhereUniqueWithoutBannedUserInput> =
  z
    .object({
      where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ServerUpdateWithoutBannedUserInputObjectSchema),
        z.lazy(() => ServerUncheckedUpdateWithoutBannedUserInputObjectSchema),
      ]),
    })
    .strict();

export const ServerUpdateWithWhereUniqueWithoutBannedUserInputObjectSchema =
  Schema;
