import { z } from 'zod';
import { MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema';
import { MemberUpdateManyMutationInputObjectSchema } from './MemberUpdateManyMutationInput.schema';
import { MemberUncheckedUpdateManyWithoutMembersInputObjectSchema } from './MemberUncheckedUpdateManyWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutServerInput> = z
  .object({
    where: z.lazy(() => MemberScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MemberUpdateManyMutationInputObjectSchema),
      z.lazy(() => MemberUncheckedUpdateManyWithoutMembersInputObjectSchema),
    ]),
  })
  .strict();

export const MemberUpdateManyWithWhereWithoutServerInputObjectSchema = Schema;
