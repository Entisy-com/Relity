import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutUserInputObjectSchema } from './MemberCreateWithoutUserInput.schema';
import { MemberUncheckedCreateWithoutUserInputObjectSchema } from './MemberUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MemberCreateWithoutUserInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const MemberCreateOrConnectWithoutUserInputObjectSchema = Schema;
