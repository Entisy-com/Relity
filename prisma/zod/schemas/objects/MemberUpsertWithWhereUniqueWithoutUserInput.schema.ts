import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutUserInputObjectSchema } from './MemberUpdateWithoutUserInput.schema';
import { MemberUncheckedUpdateWithoutUserInputObjectSchema } from './MemberUncheckedUpdateWithoutUserInput.schema';
import { MemberCreateWithoutUserInputObjectSchema } from './MemberCreateWithoutUserInput.schema';
import { MemberUncheckedCreateWithoutUserInputObjectSchema } from './MemberUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MemberUpdateWithoutUserInputObjectSchema),
      z.lazy(() => MemberUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MemberCreateWithoutUserInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const MemberUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
