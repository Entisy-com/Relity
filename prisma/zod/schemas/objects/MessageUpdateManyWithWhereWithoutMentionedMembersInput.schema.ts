import { z } from 'zod';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';
import { MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema';
import { MessageUncheckedUpdateManyWithoutMentionedInInputObjectSchema } from './MessageUncheckedUpdateManyWithoutMentionedInInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutMentionedMembersInput> =
  z
    .object({
      where: z.lazy(() => MessageScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => MessageUncheckedUpdateManyWithoutMentionedInInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageUpdateManyWithWhereWithoutMentionedMembersInputObjectSchema =
  Schema;
