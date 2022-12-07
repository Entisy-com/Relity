import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutServerInputObjectSchema } from './MemberUpdateWithoutServerInput.schema';
import { MemberUncheckedUpdateWithoutServerInputObjectSchema } from './MemberUncheckedUpdateWithoutServerInput.schema';
import { MemberCreateWithoutServerInputObjectSchema } from './MemberCreateWithoutServerInput.schema';
import { MemberUncheckedCreateWithoutServerInputObjectSchema } from './MemberUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MemberUpdateWithoutServerInputObjectSchema),
        z.lazy(() => MemberUncheckedUpdateWithoutServerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MemberCreateWithoutServerInputObjectSchema),
        z.lazy(() => MemberUncheckedCreateWithoutServerInputObjectSchema),
      ]),
    })
    .strict();

export const MemberUpsertWithWhereUniqueWithoutServerInputObjectSchema = Schema;
