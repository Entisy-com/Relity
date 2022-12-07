import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutRolesInputObjectSchema } from './MemberUpdateWithoutRolesInput.schema';
import { MemberUncheckedUpdateWithoutRolesInputObjectSchema } from './MemberUncheckedUpdateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutRolesInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MemberUpdateWithoutRolesInputObjectSchema),
      z.lazy(() => MemberUncheckedUpdateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const MemberUpdateWithWhereUniqueWithoutRolesInputObjectSchema = Schema;
