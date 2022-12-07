import { z } from 'zod';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';
import { TextChannelUpdateWithoutServerInputObjectSchema } from './TextChannelUpdateWithoutServerInput.schema';
import { TextChannelUncheckedUpdateWithoutServerInputObjectSchema } from './TextChannelUncheckedUpdateWithoutServerInput.schema';
import { TextChannelCreateWithoutServerInputObjectSchema } from './TextChannelCreateWithoutServerInput.schema';
import { TextChannelUncheckedCreateWithoutServerInputObjectSchema } from './TextChannelUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUpsertWithWhereUniqueWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TextChannelUpdateWithoutServerInputObjectSchema),
        z.lazy(() => TextChannelUncheckedUpdateWithoutServerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TextChannelCreateWithoutServerInputObjectSchema),
        z.lazy(() => TextChannelUncheckedCreateWithoutServerInputObjectSchema),
      ]),
    })
    .strict();

export const TextChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema =
  Schema;
