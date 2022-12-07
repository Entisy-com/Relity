import { z } from 'zod';
import { MessageCreateWithoutAuthorInputObjectSchema } from './MessageCreateWithoutAuthorInput.schema';
import { MessageUncheckedCreateWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateWithoutAuthorInput.schema';
import { MessageCreateOrConnectWithoutAuthorInputObjectSchema } from './MessageCreateOrConnectWithoutAuthorInput.schema';
import { MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutAuthorInput.schema';
import { MessageCreateManyAuthorInputEnvelopeObjectSchema } from './MessageCreateManyAuthorInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutAuthorInput.schema';
import { MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './MessageUpdateManyWithWhereWithoutAuthorInput.schema';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateManyWithoutAuthorNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema).array(),
        z.lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema),
        z
          .lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MessageCreateOrConnectWithoutAuthorInputObjectSchema),
        z
          .lazy(() => MessageCreateOrConnectWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
        ),
        z
          .lazy(
            () => MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MessageCreateManyAuthorInputEnvelopeObjectSchema)
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
          () => MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
        ),
        z
          .lazy(
            () => MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema),
        z
          .lazy(() => MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema)
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

export const MessageUpdateManyWithoutAuthorNestedInputObjectSchema = Schema;
