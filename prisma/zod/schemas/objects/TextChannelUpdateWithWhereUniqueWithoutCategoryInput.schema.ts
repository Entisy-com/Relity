import { z } from 'zod';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';
import { TextChannelUpdateWithoutCategoryInputObjectSchema } from './TextChannelUpdateWithoutCategoryInput.schema';
import { TextChannelUncheckedUpdateWithoutCategoryInputObjectSchema } from './TextChannelUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TextChannelUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => TextChannelUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TextChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
