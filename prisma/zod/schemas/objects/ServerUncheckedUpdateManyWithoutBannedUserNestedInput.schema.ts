import { z } from 'zod';
import { ServerCreateWithoutBannedUserInputObjectSchema } from './ServerCreateWithoutBannedUserInput.schema';
import { ServerUncheckedCreateWithoutBannedUserInputObjectSchema } from './ServerUncheckedCreateWithoutBannedUserInput.schema';
import { ServerCreateOrConnectWithoutBannedUserInputObjectSchema } from './ServerCreateOrConnectWithoutBannedUserInput.schema';
import { ServerUpsertWithWhereUniqueWithoutBannedUserInputObjectSchema } from './ServerUpsertWithWhereUniqueWithoutBannedUserInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithWhereUniqueWithoutBannedUserInputObjectSchema } from './ServerUpdateWithWhereUniqueWithoutBannedUserInput.schema';
import { ServerUpdateManyWithWhereWithoutBannedUserInputObjectSchema } from './ServerUpdateManyWithWhereWithoutBannedUserInput.schema';
import { ServerScalarWhereInputObjectSchema } from './ServerScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUncheckedUpdateManyWithoutBannedUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => ServerUpsertWithWhereUniqueWithoutBannedUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUpsertWithWhereUniqueWithoutBannedUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ServerWhereUniqueInputObjectSchema),
          z.lazy(() => ServerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ServerWhereUniqueInputObjectSchema),
          z.lazy(() => ServerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ServerWhereUniqueInputObjectSchema),
          z.lazy(() => ServerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServerWhereUniqueInputObjectSchema),
          z.lazy(() => ServerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ServerUpdateWithWhereUniqueWithoutBannedUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServerUpdateWithWhereUniqueWithoutBannedUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ServerUpdateManyWithWhereWithoutBannedUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ServerUpdateManyWithWhereWithoutBannedUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ServerScalarWhereInputObjectSchema),
          z.lazy(() => ServerScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ServerUncheckedUpdateManyWithoutBannedUserNestedInputObjectSchema =
  Schema;
