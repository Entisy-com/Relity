import { z } from 'zod';
import { MessageCreateWithoutMentionedRolesInputObjectSchema } from './MessageCreateWithoutMentionedRolesInput.schema';
import { MessageUncheckedCreateWithoutMentionedRolesInputObjectSchema } from './MessageUncheckedCreateWithoutMentionedRolesInput.schema';
import { MessageCreateOrConnectWithoutMentionedRolesInputObjectSchema } from './MessageCreateOrConnectWithoutMentionedRolesInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutMentionedRolesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutMentionedRolesInputObjectSchema),
          z
            .lazy(() => MessageCreateWithoutMentionedRolesInputObjectSchema)
            .array(),
          z.lazy(
            () => MessageUncheckedCreateWithoutMentionedRolesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUncheckedCreateWithoutMentionedRolesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MessageCreateOrConnectWithoutMentionedRolesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageCreateOrConnectWithoutMentionedRolesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageUncheckedCreateNestedManyWithoutMentionedRolesInputObjectSchema =
  Schema;
