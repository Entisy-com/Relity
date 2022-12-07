import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutMentionedRolesInputObjectSchema } from './MessageCreateWithoutMentionedRolesInput.schema';
import { MessageUncheckedCreateWithoutMentionedRolesInputObjectSchema } from './MessageUncheckedCreateWithoutMentionedRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutMentionedRolesInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MessageCreateWithoutMentionedRolesInputObjectSchema),
        z.lazy(
          () => MessageUncheckedCreateWithoutMentionedRolesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageCreateOrConnectWithoutMentionedRolesInputObjectSchema =
  Schema;
