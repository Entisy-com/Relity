import { z } from 'zod';
import { TextChannelCreateWithoutServerInputObjectSchema } from './TextChannelCreateWithoutServerInput.schema';
import { TextChannelUncheckedCreateWithoutServerInputObjectSchema } from './TextChannelUncheckedCreateWithoutServerInput.schema';
import { TextChannelCreateOrConnectWithoutServerInputObjectSchema } from './TextChannelCreateOrConnectWithoutServerInput.schema';
import { TextChannelCreateManyServerInputEnvelopeObjectSchema } from './TextChannelCreateManyServerInputEnvelope.schema';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUncheckedCreateNestedManyWithoutServerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TextChannelCreateWithoutServerInputObjectSchema),
          z.lazy(() => TextChannelCreateWithoutServerInputObjectSchema).array(),
          z.lazy(
            () => TextChannelUncheckedCreateWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () => TextChannelUncheckedCreateWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TextChannelCreateOrConnectWithoutServerInputObjectSchema,
          ),
          z
            .lazy(
              () => TextChannelCreateOrConnectWithoutServerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TextChannelCreateManyServerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TextChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema =
  Schema;
