import { z } from 'zod';
import { MemberUpdateWithoutMessagesInputObjectSchema } from './MemberUpdateWithoutMessagesInput.schema';
import { MemberUncheckedUpdateWithoutMessagesInputObjectSchema } from './MemberUncheckedUpdateWithoutMessagesInput.schema';
import { MemberCreateWithoutMessagesInputObjectSchema } from './MemberCreateWithoutMessagesInput.schema';
import { MemberUncheckedCreateWithoutMessagesInputObjectSchema } from './MemberUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpsertWithoutMessagesInput> = z
  .object({
    update: z.union([
      z.lazy(() => MemberUpdateWithoutMessagesInputObjectSchema),
      z.lazy(() => MemberUncheckedUpdateWithoutMessagesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MemberCreateWithoutMessagesInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict();

export const MemberUpsertWithoutMessagesInputObjectSchema = Schema;
