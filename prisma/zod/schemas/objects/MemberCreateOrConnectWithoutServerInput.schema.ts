import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutServerInputObjectSchema } from './MemberCreateWithoutServerInput.schema';
import { MemberUncheckedCreateWithoutServerInputObjectSchema } from './MemberUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateOrConnectWithoutServerInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MemberCreateWithoutServerInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutServerInputObjectSchema),
    ]),
  })
  .strict();

export const MemberCreateOrConnectWithoutServerInputObjectSchema = Schema;
