import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutOwnerOfInputObjectSchema } from './MemberCreateWithoutOwnerOfInput.schema';
import { MemberUncheckedCreateWithoutOwnerOfInputObjectSchema } from './MemberUncheckedCreateWithoutOwnerOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateOrConnectWithoutOwnerOfInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MemberCreateWithoutOwnerOfInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutOwnerOfInputObjectSchema),
    ]),
  })
  .strict();

export const MemberCreateOrConnectWithoutOwnerOfInputObjectSchema = Schema;
