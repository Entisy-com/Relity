import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutMentionedInInputObjectSchema } from './MemberUpdateWithoutMentionedInInput.schema';
import { MemberUncheckedUpdateWithoutMentionedInInputObjectSchema } from './MemberUncheckedUpdateWithoutMentionedInInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutMentionedInInput> =
  z
    .object({
      where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MemberUpdateWithoutMentionedInInputObjectSchema),
        z.lazy(() => MemberUncheckedUpdateWithoutMentionedInInputObjectSchema),
      ]),
    })
    .strict();

export const MemberUpdateWithWhereUniqueWithoutMentionedInInputObjectSchema =
  Schema;
