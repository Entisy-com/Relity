import { z } from 'zod';
import { MemberCreateWithoutMentionedInInputObjectSchema } from './MemberCreateWithoutMentionedInInput.schema';
import { MemberUncheckedCreateWithoutMentionedInInputObjectSchema } from './MemberUncheckedCreateWithoutMentionedInInput.schema';
import { MemberCreateOrConnectWithoutMentionedInInputObjectSchema } from './MemberCreateOrConnectWithoutMentionedInInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUncheckedCreateNestedManyWithoutMentionedInInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MemberCreateWithoutMentionedInInputObjectSchema),
          z.lazy(() => MemberCreateWithoutMentionedInInputObjectSchema).array(),
          z.lazy(
            () => MemberUncheckedCreateWithoutMentionedInInputObjectSchema,
          ),
          z
            .lazy(
              () => MemberUncheckedCreateWithoutMentionedInInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MemberCreateOrConnectWithoutMentionedInInputObjectSchema,
          ),
          z
            .lazy(
              () => MemberCreateOrConnectWithoutMentionedInInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MemberUncheckedCreateNestedManyWithoutMentionedInInputObjectSchema =
  Schema;
