import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutMentionedRolesInputObjectSchema } from './MessageUpdateWithoutMentionedRolesInput.schema';
import { MessageUncheckedUpdateWithoutMentionedRolesInputObjectSchema } from './MessageUncheckedUpdateWithoutMentionedRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutMentionedRolesInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateWithoutMentionedRolesInputObjectSchema),
        z.lazy(
          () => MessageUncheckedUpdateWithoutMentionedRolesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageUpdateWithWhereUniqueWithoutMentionedRolesInputObjectSchema =
  Schema;
