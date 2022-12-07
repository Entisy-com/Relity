import { z } from 'zod';
import { MessageCreateWithoutTextChannelInputObjectSchema } from './MessageCreateWithoutTextChannelInput.schema';
import { MessageUncheckedCreateWithoutTextChannelInputObjectSchema } from './MessageUncheckedCreateWithoutTextChannelInput.schema';
import { MessageCreateOrConnectWithoutTextChannelInputObjectSchema } from './MessageCreateOrConnectWithoutTextChannelInput.schema';
import { MessageCreateManyTextChannelInputEnvelopeObjectSchema } from './MessageCreateManyTextChannelInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutTextChannelInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutTextChannelInputObjectSchema),
          z
            .lazy(() => MessageCreateWithoutTextChannelInputObjectSchema)
            .array(),
          z.lazy(
            () => MessageUncheckedCreateWithoutTextChannelInputObjectSchema,
          ),
          z
            .lazy(
              () => MessageUncheckedCreateWithoutTextChannelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MessageCreateOrConnectWithoutTextChannelInputObjectSchema,
          ),
          z
            .lazy(
              () => MessageCreateOrConnectWithoutTextChannelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MessageCreateManyTextChannelInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageUncheckedCreateNestedManyWithoutTextChannelInputObjectSchema =
  Schema;
