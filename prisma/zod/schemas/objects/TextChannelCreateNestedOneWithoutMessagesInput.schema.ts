import { z } from 'zod';
import { TextChannelCreateWithoutMessagesInputObjectSchema } from './TextChannelCreateWithoutMessagesInput.schema';
import { TextChannelUncheckedCreateWithoutMessagesInputObjectSchema } from './TextChannelUncheckedCreateWithoutMessagesInput.schema';
import { TextChannelCreateOrConnectWithoutMessagesInputObjectSchema } from './TextChannelCreateOrConnectWithoutMessagesInput.schema';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelCreateNestedOneWithoutMessagesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TextChannelCreateWithoutMessagesInputObjectSchema),
          z.lazy(
            () => TextChannelUncheckedCreateWithoutMessagesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TextChannelCreateOrConnectWithoutMessagesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TextChannelWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TextChannelCreateNestedOneWithoutMessagesInputObjectSchema =
  Schema;
