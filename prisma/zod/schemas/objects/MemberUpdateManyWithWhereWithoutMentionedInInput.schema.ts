import { z } from 'zod';
import { MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema';
import { MemberUpdateManyMutationInputObjectSchema } from './MemberUpdateManyMutationInput.schema';
import { MemberUncheckedUpdateManyWithoutMentionedMembersInputObjectSchema } from './MemberUncheckedUpdateManyWithoutMentionedMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutMentionedInInput> =
  z
    .object({
      where: z.lazy(() => MemberScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MemberUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MemberUncheckedUpdateManyWithoutMentionedMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MemberUpdateManyWithWhereWithoutMentionedInInputObjectSchema =
  Schema;
