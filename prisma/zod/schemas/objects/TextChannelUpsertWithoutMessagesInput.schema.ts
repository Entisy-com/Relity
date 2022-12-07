import { z } from 'zod';
import { TextChannelUpdateWithoutMessagesInputObjectSchema } from './TextChannelUpdateWithoutMessagesInput.schema';
import { TextChannelUncheckedUpdateWithoutMessagesInputObjectSchema } from './TextChannelUncheckedUpdateWithoutMessagesInput.schema';
import { TextChannelCreateWithoutMessagesInputObjectSchema } from './TextChannelCreateWithoutMessagesInput.schema';
import { TextChannelUncheckedCreateWithoutMessagesInputObjectSchema } from './TextChannelUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUpsertWithoutMessagesInput> = z
  .object({
    update: z.union([
      z.lazy(() => TextChannelUpdateWithoutMessagesInputObjectSchema),
      z.lazy(() => TextChannelUncheckedUpdateWithoutMessagesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TextChannelCreateWithoutMessagesInputObjectSchema),
      z.lazy(() => TextChannelUncheckedCreateWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict();

export const TextChannelUpsertWithoutMessagesInputObjectSchema = Schema;
