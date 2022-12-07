import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutAuthorInputObjectSchema } from './MessageCreateWithoutAuthorInput.schema';
import { MessageUncheckedCreateWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict();

export const MessageCreateOrConnectWithoutAuthorInputObjectSchema = Schema;
