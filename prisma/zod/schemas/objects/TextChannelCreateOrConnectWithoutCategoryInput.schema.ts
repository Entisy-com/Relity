import { z } from 'zod';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';
import { TextChannelCreateWithoutCategoryInputObjectSchema } from './TextChannelCreateWithoutCategoryInput.schema';
import { TextChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './TextChannelUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelCreateOrConnectWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TextChannelCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => TextChannelUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TextChannelCreateOrConnectWithoutCategoryInputObjectSchema =
  Schema;
