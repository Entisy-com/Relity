import { z } from 'zod';
import { MemberUpdateWithoutOwnerOfInputObjectSchema } from './MemberUpdateWithoutOwnerOfInput.schema';
import { MemberUncheckedUpdateWithoutOwnerOfInputObjectSchema } from './MemberUncheckedUpdateWithoutOwnerOfInput.schema';
import { MemberCreateWithoutOwnerOfInputObjectSchema } from './MemberCreateWithoutOwnerOfInput.schema';
import { MemberUncheckedCreateWithoutOwnerOfInputObjectSchema } from './MemberUncheckedCreateWithoutOwnerOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpsertWithoutOwnerOfInput> = z
  .object({
    update: z.union([
      z.lazy(() => MemberUpdateWithoutOwnerOfInputObjectSchema),
      z.lazy(() => MemberUncheckedUpdateWithoutOwnerOfInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MemberCreateWithoutOwnerOfInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutOwnerOfInputObjectSchema),
    ]),
  })
  .strict();

export const MemberUpsertWithoutOwnerOfInputObjectSchema = Schema;
