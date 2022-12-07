import { z } from 'zod';
import { TextChannelCreateWithoutMessagesInputObjectSchema } from './TextChannelCreateWithoutMessagesInput.schema';
import { TextChannelUncheckedCreateWithoutMessagesInputObjectSchema } from './TextChannelUncheckedCreateWithoutMessagesInput.schema';
import { TextChannelCreateOrConnectWithoutMessagesInputObjectSchema } from './TextChannelCreateOrConnectWithoutMessagesInput.schema';
import { TextChannelUpsertWithoutMessagesInputObjectSchema } from './TextChannelUpsertWithoutMessagesInput.schema';
import { TextChannelWhereUniqueInputObjectSchema } from './TextChannelWhereUniqueInput.schema';
import { TextChannelUpdateWithoutMessagesInputObjectSchema } from './TextChannelUpdateWithoutMessagesInput.schema';
import { TextChannelUncheckedUpdateWithoutMessagesInputObjectSchema } from './TextChannelUncheckedUpdateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUpdateOneRequiredWithoutMessagesNestedInput> =
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
      upsert: z
        .lazy(() => TextChannelUpsertWithoutMessagesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TextChannelWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TextChannelUpdateWithoutMessagesInputObjectSchema),
          z.lazy(
            () => TextChannelUncheckedUpdateWithoutMessagesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TextChannelUpdateOneRequiredWithoutMessagesNestedInputObjectSchema =
  Schema;
