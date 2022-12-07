import { z } from 'zod';
import { TextChannelCreateWithoutCategoryInputObjectSchema } from './TextChannelCreateWithoutCategoryInput.schema';
import { TextChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './TextChannelUncheckedCreateWithoutCategoryInput.schema';
import { TextChannelCreateOrConnectWithoutCategoryInputObjectSchema } from './TextChannelCreateOrConnectWithoutCategoryInput.schema';
import { TextChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './TextChannelUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { TextChannelCreateManyCategoryInputEnvelopeObjectSchema } from './TextChannelCreateManyCategoryInputEnvelope.schema';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';
import { TextChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './TextChannelUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { TextChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './TextChannelUpdateManyWithWhereWithoutCategoryInput.schema';
import { TextChannelScalarWhereInputObjectSchema } from './TextChannelScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUncheckedUpdateManyWithoutCategoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TextChannelCreateWithoutCategoryInputObjectSchema),
          z
            .lazy(() => TextChannelCreateWithoutCategoryInputObjectSchema)
            .array(),
          z.lazy(
            () => TextChannelUncheckedCreateWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => TextChannelUncheckedCreateWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TextChannelCreateOrConnectWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => TextChannelCreateOrConnectWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TextChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TextChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TextChannelCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TextChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TextChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TextChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TextChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TextChannelScalarWhereInputObjectSchema),
          z.lazy(() => TextChannelScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TextChannelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
