import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutServerInputObjectSchema } from './MemberUpdateWithoutServerInput.schema';
import { MemberUncheckedUpdateWithoutServerInputObjectSchema } from './MemberUncheckedUpdateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MemberUpdateWithoutServerInputObjectSchema),
        z.lazy(() => MemberUncheckedUpdateWithoutServerInputObjectSchema),
      ]),
    })
    .strict();

export const MemberUpdateWithWhereUniqueWithoutServerInputObjectSchema = Schema;
