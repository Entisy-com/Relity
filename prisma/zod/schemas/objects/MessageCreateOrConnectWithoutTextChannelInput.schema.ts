import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutTextChannelInputObjectSchema } from './MessageCreateWithoutTextChannelInput.schema';
import { MessageUncheckedCreateWithoutTextChannelInputObjectSchema } from './MessageUncheckedCreateWithoutTextChannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutTextChannelInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MessageCreateWithoutTextChannelInputObjectSchema),
        z.lazy(() => MessageUncheckedCreateWithoutTextChannelInputObjectSchema),
      ]),
    })
    .strict();

export const MessageCreateOrConnectWithoutTextChannelInputObjectSchema = Schema;
