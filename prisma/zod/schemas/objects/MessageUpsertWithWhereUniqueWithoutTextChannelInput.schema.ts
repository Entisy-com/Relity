import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutTextChannelInputObjectSchema } from './MessageUpdateWithoutTextChannelInput.schema';
import { MessageUncheckedUpdateWithoutTextChannelInputObjectSchema } from './MessageUncheckedUpdateWithoutTextChannelInput.schema';
import { MessageCreateWithoutTextChannelInputObjectSchema } from './MessageCreateWithoutTextChannelInput.schema';
import { MessageUncheckedCreateWithoutTextChannelInputObjectSchema } from './MessageUncheckedCreateWithoutTextChannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutTextChannelInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MessageUpdateWithoutTextChannelInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutTextChannelInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MessageCreateWithoutTextChannelInputObjectSchema),
        z.lazy(() => MessageUncheckedCreateWithoutTextChannelInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpsertWithWhereUniqueWithoutTextChannelInputObjectSchema =
  Schema;
