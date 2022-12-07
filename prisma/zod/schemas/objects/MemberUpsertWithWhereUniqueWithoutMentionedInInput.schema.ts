import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutMentionedInInputObjectSchema } from './MemberUpdateWithoutMentionedInInput.schema';
import { MemberUncheckedUpdateWithoutMentionedInInputObjectSchema } from './MemberUncheckedUpdateWithoutMentionedInInput.schema';
import { MemberCreateWithoutMentionedInInputObjectSchema } from './MemberCreateWithoutMentionedInInput.schema';
import { MemberUncheckedCreateWithoutMentionedInInputObjectSchema } from './MemberUncheckedCreateWithoutMentionedInInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutMentionedInInput> =
  z
    .object({
      where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MemberUpdateWithoutMentionedInInputObjectSchema),
        z.lazy(() => MemberUncheckedUpdateWithoutMentionedInInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MemberCreateWithoutMentionedInInputObjectSchema),
        z.lazy(() => MemberUncheckedCreateWithoutMentionedInInputObjectSchema),
      ]),
    })
    .strict();

export const MemberUpsertWithWhereUniqueWithoutMentionedInInputObjectSchema =
  Schema;
