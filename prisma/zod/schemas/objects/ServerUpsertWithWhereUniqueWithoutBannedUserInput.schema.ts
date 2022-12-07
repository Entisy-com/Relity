import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutBannedUserInputObjectSchema } from './ServerUpdateWithoutBannedUserInput.schema';
import { ServerUncheckedUpdateWithoutBannedUserInputObjectSchema } from './ServerUncheckedUpdateWithoutBannedUserInput.schema';
import { ServerCreateWithoutBannedUserInputObjectSchema } from './ServerCreateWithoutBannedUserInput.schema';
import { ServerUncheckedCreateWithoutBannedUserInputObjectSchema } from './ServerUncheckedCreateWithoutBannedUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpsertWithWhereUniqueWithoutBannedUserInput> =
  z
    .object({
      where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ServerUpdateWithoutBannedUserInputObjectSchema),
        z.lazy(() => ServerUncheckedUpdateWithoutBannedUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ServerCreateWithoutBannedUserInputObjectSchema),
        z.lazy(() => ServerUncheckedCreateWithoutBannedUserInputObjectSchema),
      ]),
    })
    .strict();

export const ServerUpsertWithWhereUniqueWithoutBannedUserInputObjectSchema =
  Schema;
