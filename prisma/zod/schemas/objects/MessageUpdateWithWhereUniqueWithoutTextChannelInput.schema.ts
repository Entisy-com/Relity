import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutTextChannelInputObjectSchema } from './MessageUpdateWithoutTextChannelInput.schema';
import { MessageUncheckedUpdateWithoutTextChannelInputObjectSchema } from './MessageUncheckedUpdateWithoutTextChannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutTextChannelInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateWithoutTextChannelInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutTextChannelInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpdateWithWhereUniqueWithoutTextChannelInputObjectSchema =
  Schema;
