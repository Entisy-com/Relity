import { z } from 'zod';
import { MemberUpdateWithoutActionTypeInputObjectSchema } from './MemberUpdateWithoutActionTypeInput.schema';
import { MemberUncheckedUpdateWithoutActionTypeInputObjectSchema } from './MemberUncheckedUpdateWithoutActionTypeInput.schema';
import { MemberCreateWithoutActionTypeInputObjectSchema } from './MemberCreateWithoutActionTypeInput.schema';
import { MemberUncheckedCreateWithoutActionTypeInputObjectSchema } from './MemberUncheckedCreateWithoutActionTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpsertWithoutActionTypeInput> = z
  .object({
    update: z.union([
      z.lazy(() => MemberUpdateWithoutActionTypeInputObjectSchema),
      z.lazy(() => MemberUncheckedUpdateWithoutActionTypeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MemberCreateWithoutActionTypeInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutActionTypeInputObjectSchema),
    ]),
  })
  .strict();

export const MemberUpsertWithoutActionTypeInputObjectSchema = Schema;
