import { z } from 'zod';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';
import { TextChannelUpdateWithoutCategoryInputObjectSchema } from './TextChannelUpdateWithoutCategoryInput.schema';
import { TextChannelUncheckedUpdateWithoutCategoryInputObjectSchema } from './TextChannelUncheckedUpdateWithoutCategoryInput.schema';
import { TextChannelCreateWithoutCategoryInputObjectSchema } from './TextChannelCreateWithoutCategoryInput.schema';
import { TextChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './TextChannelUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TextChannelUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => TextChannelUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TextChannelCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => TextChannelUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TextChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
