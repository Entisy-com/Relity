import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutUserInputObjectSchema } from './MemberUpdateWithoutUserInput.schema';
import { MemberUncheckedUpdateWithoutUserInputObjectSchema } from './MemberUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MemberUpdateWithoutUserInputObjectSchema),
      z.lazy(() => MemberUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const MemberUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
