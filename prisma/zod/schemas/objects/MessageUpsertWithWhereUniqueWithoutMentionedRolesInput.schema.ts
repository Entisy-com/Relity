import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutMentionedRolesInputObjectSchema } from './MessageUpdateWithoutMentionedRolesInput.schema';
import { MessageUncheckedUpdateWithoutMentionedRolesInputObjectSchema } from './MessageUncheckedUpdateWithoutMentionedRolesInput.schema';
import { MessageCreateWithoutMentionedRolesInputObjectSchema } from './MessageCreateWithoutMentionedRolesInput.schema';
import { MessageUncheckedCreateWithoutMentionedRolesInputObjectSchema } from './MessageUncheckedCreateWithoutMentionedRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutMentionedRolesInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MessageUpdateWithoutMentionedRolesInputObjectSchema),
        z.lazy(
          () => MessageUncheckedUpdateWithoutMentionedRolesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MessageCreateWithoutMentionedRolesInputObjectSchema),
        z.lazy(
          () => MessageUncheckedCreateWithoutMentionedRolesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageUpsertWithWhereUniqueWithoutMentionedRolesInputObjectSchema =
  Schema;
