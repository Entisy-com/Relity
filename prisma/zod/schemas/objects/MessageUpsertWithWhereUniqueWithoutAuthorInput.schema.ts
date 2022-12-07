import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutAuthorInputObjectSchema } from './MessageUpdateWithoutAuthorInput.schema';
import { MessageUncheckedUpdateWithoutAuthorInputObjectSchema } from './MessageUncheckedUpdateWithoutAuthorInput.schema';
import { MessageCreateWithoutAuthorInputObjectSchema } from './MessageCreateWithoutAuthorInput.schema';
import { MessageUncheckedCreateWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MessageUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema;
