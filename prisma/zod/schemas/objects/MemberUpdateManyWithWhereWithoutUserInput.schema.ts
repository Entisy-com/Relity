import { z } from 'zod';
import { MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema';
import { MemberUpdateManyMutationInputObjectSchema } from './MemberUpdateManyMutationInput.schema';
import { MemberUncheckedUpdateManyWithoutMemberInputObjectSchema } from './MemberUncheckedUpdateManyWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => MemberScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MemberUpdateManyMutationInputObjectSchema),
      z.lazy(() => MemberUncheckedUpdateManyWithoutMemberInputObjectSchema),
    ]),
  })
  .strict();

export const MemberUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
