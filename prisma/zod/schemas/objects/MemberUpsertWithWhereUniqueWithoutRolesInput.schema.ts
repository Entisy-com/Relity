import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutRolesInputObjectSchema } from './MemberUpdateWithoutRolesInput.schema';
import { MemberUncheckedUpdateWithoutRolesInputObjectSchema } from './MemberUncheckedUpdateWithoutRolesInput.schema';
import { MemberCreateWithoutRolesInputObjectSchema } from './MemberCreateWithoutRolesInput.schema';
import { MemberUncheckedCreateWithoutRolesInputObjectSchema } from './MemberUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutRolesInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MemberUpdateWithoutRolesInputObjectSchema),
      z.lazy(() => MemberUncheckedUpdateWithoutRolesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MemberCreateWithoutRolesInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const MemberUpsertWithWhereUniqueWithoutRolesInputObjectSchema = Schema;
