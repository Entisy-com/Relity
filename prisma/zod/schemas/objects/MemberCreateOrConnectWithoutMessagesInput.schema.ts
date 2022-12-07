import { z } from 'zod';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutMessagesInputObjectSchema } from './MemberCreateWithoutMessagesInput.schema';
import { MemberUncheckedCreateWithoutMessagesInputObjectSchema } from './MemberUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateOrConnectWithoutMessagesInput> = z
  .object({
    where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MemberCreateWithoutMessagesInputObjectSchema),
      z.lazy(() => MemberUncheckedCreateWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict();

export const MemberCreateOrConnectWithoutMessagesInputObjectSchema = Schema;
