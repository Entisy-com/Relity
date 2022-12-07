import { z } from 'zod';
import { MessageCreateWithoutTextChannelInputObjectSchema } from './MessageCreateWithoutTextChannelInput.schema';
import { MessageUncheckedCreateWithoutTextChannelInputObjectSchema } from './MessageUncheckedCreateWithoutTextChannelInput.schema';
import { MessageCreateOrConnectWithoutTextChannelInputObjectSchema } from './MessageCreateOrConnectWithoutTextChannelInput.schema';
import { MessageUpsertWithWhereUniqueWithoutTextChannelInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutTextChannelInput.schema';
import { MessageCreateManyTextChannelInputEnvelopeObjectSchema } from './MessageCreateManyTextChannelInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutTextChannelInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutTextChannelInput.schema';
import { MessageUpdateManyWithWhereWithoutTextChannelInputObjectSchema } from './MessageUpdateManyWithWhereWithoutTextChannelInput.schema';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateManyWithoutTextChannelNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              MessageUpsertWithWhereUniqueWithoutTextChannelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpsertWithWhereUniqueWithoutTextChannelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MessageCreateManyTextChannelInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MessageUpdateWithWhereUniqueWithoutTextChannelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpdateWithWhereUniqueWithoutTextChannelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MessageUpdateManyWithWhereWithoutTextChannelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpdateManyWithWhereWithoutTextChannelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MessageScalarWhereInputObjectSchema),
          z.lazy(() => MessageScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageUpdateManyWithoutTextChannelNestedInputObjectSchema =
  Schema;
