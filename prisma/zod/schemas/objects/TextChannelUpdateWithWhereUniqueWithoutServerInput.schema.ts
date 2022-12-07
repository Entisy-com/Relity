import { z } from 'zod';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';
import { TextChannelUpdateWithoutServerInputObjectSchema } from './TextChannelUpdateWithoutServerInput.schema';
import { TextChannelUncheckedUpdateWithoutServerInputObjectSchema } from './TextChannelUncheckedUpdateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUpdateWithWhereUniqueWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TextChannelUpdateWithoutServerInputObjectSchema),
        z.lazy(() => TextChannelUncheckedUpdateWithoutServerInputObjectSchema),
      ]),
    })
    .strict();

export const TextChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema =
  Schema;
