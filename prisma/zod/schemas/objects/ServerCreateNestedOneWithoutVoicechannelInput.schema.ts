import { z } from 'zod';
import { ServerCreateWithoutVoicechannelInputObjectSchema } from './ServerCreateWithoutVoicechannelInput.schema';
import { ServerUncheckedCreateWithoutVoicechannelInputObjectSchema } from './ServerUncheckedCreateWithoutVoicechannelInput.schema';
import { ServerCreateOrConnectWithoutVoicechannelInputObjectSchema } from './ServerCreateOrConnectWithoutVoicechannelInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateNestedOneWithoutVoicechannelInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServerCreateWithoutVoicechannelInputObjectSchema),
          z.lazy(
            () => ServerUncheckedCreateWithoutVoicechannelInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ServerCreateOrConnectWithoutVoicechannelInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ServerCreateNestedOneWithoutVoicechannelInputObjectSchema = Schema;
