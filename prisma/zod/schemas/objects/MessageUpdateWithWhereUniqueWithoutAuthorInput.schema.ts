import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutAuthorInputObjectSchema } from './MessageUpdateWithoutAuthorInput.schema';
import { MessageUncheckedUpdateWithoutAuthorInputObjectSchema } from './MessageUncheckedUpdateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema;
