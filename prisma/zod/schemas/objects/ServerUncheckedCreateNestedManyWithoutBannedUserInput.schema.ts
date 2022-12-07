import { z } from 'zod';
import { ServerCreateWithoutBannedUserInputObjectSchema } from './ServerCreateWithoutBannedUserInput.schema';
import { ServerUncheckedCreateWithoutBannedUserInputObjectSchema } from './ServerUncheckedCreateWithoutBannedUserInput.schema';
import { ServerCreateOrConnectWithoutBannedUserInputObjectSchema } from './ServerCreateOrConnectWithoutBannedUserInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUncheckedCreateNestedManyWithoutBannedUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerCreateWithoutBannedUserInputObjectSchema),
          z.lazy(() => ServerCreateWithoutBannedUserInputObjectSchema).array(),
          z.lazy(() => ServerUncheckedCreateWithoutBannedUserInputObjectSchema),
          z
            .lazy(() => ServerUncheckedCreateWithoutBannedUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ServerCreateOrConnectWithoutBannedUserInputObjectSchema),
          z
            .lazy(() => ServerCreateOrConnectWithoutBannedUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServerWhereUniqueInputObjectSchema),
          z.lazy(() => ServerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ServerUncheckedCreateNestedManyWithoutBannedUserInputObjectSchema =
  Schema;
