import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutActionTypeInputObjectSchema } from './MemberCreateWithoutActionTypeInput.schema';
import { MemberUncheckedCreateWithoutActionTypeInputObjectSchema } from './MemberUncheckedCreateWithoutActionTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateOrConnectWithoutActionTypeInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MemberCreateWithoutActionTypeInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutActionTypeInputObjectSchema),
    ]),
  })
  .strict();

export const MemberCreateOrConnectWithoutActionTypeInputObjectSchema = Schema;
