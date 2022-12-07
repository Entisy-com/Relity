import { z } from 'zod';
import { TextChannelCreateWithoutCategoryInputObjectSchema } from './TextChannelCreateWithoutCategoryInput.schema';
import { TextChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './TextChannelUncheckedCreateWithoutCategoryInput.schema';
import { TextChannelCreateOrConnectWithoutCategoryInputObjectSchema } from './TextChannelCreateOrConnectWithoutCategoryInput.schema';
import { TextChannelCreateManyCategoryInputEnvelopeObjectSchema } from './TextChannelCreateManyCategoryInputEnvelope.schema';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUncheckedCreateNestedManyWithoutCategoryInput> =
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
      createMany: z
        .lazy(() => TextChannelCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
          z.lazy(() => TextChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TextChannelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema =
  Schema;
