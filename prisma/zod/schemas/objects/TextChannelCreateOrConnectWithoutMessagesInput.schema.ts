import { z } from 'zod';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';
import { TextChannelCreateWithoutMessagesInputObjectSchema } from './TextChannelCreateWithoutMessagesInput.schema';
import { TextChannelUncheckedCreateWithoutMessagesInputObjectSchema } from './TextChannelUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelCreateOrConnectWithoutMessagesInput> =
  z
    .object({
      where: z.lazy(() => TextChannelWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TextChannelCreateWithoutMessagesInputObjectSchema),
        z.lazy(
          () => TextChannelUncheckedCreateWithoutMessagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TextChannelCreateOrConnectWithoutMessagesInputObjectSchema =
  Schema;
