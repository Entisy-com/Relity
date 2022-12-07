import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutMentionedInInputObjectSchema } from './MemberCreateWithoutMentionedInInput.schema';
import { MemberUncheckedCreateWithoutMentionedInInputObjectSchema } from './MemberUncheckedCreateWithoutMentionedInInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateOrConnectWithoutMentionedInInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MemberCreateWithoutMentionedInInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutMentionedInInputObjectSchema),
    ]),
  })
  .strict();

export const MemberCreateOrConnectWithoutMentionedInInputObjectSchema = Schema;
