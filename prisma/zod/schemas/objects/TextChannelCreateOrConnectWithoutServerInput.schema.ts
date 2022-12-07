import { z } from 'zod';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';
import { TextChannelCreateWithoutServerInputObjectSchema } from './TextChannelCreateWithoutServerInput.schema';
import { TextChannelUncheckedCreateWithoutServerInputObjectSchema } from './TextChannelUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelCreateOrConnectWithoutServerInput> = z
  .object({
    where: z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TextChannelCreateWithoutServerInputObjectSchema),
      z.lazy(() => TextChannelUncheckedCreateWithoutServerInputObjectSchema),
    ]),
  })
  .strict();

export const TextChannelCreateOrConnectWithoutServerInputObjectSchema = Schema;
