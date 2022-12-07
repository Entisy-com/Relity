import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutRolesInputObjectSchema } from './MemberCreateWithoutRolesInput.schema';
import { MemberUncheckedCreateWithoutRolesInputObjectSchema } from './MemberUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateOrConnectWithoutRolesInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MemberCreateWithoutRolesInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const MemberCreateOrConnectWithoutRolesInputObjectSchema = Schema;
