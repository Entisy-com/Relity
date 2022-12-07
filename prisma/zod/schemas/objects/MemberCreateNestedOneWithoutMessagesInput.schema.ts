import { z } from 'zod';
import { MemberCreateWithoutMessagesInputObjectSchema } from './MemberCreateWithoutMessagesInput.schema';
import { MemberUncheckedCreateWithoutMessagesInputObjectSchema } from './MemberUncheckedCreateWithoutMessagesInput.schema';
import { MemberCreateOrConnectWithoutMessagesInputObjectSchema } from './MemberCreateOrConnectWithoutMessagesInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateNestedOneWithoutMessagesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MemberCreateWithoutMessagesInputObjectSchema),
        z.lazy(() => MemberUncheckedCreateWithoutMessagesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MemberCreateOrConnectWithoutMessagesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MemberWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MemberCreateNestedOneWithoutMessagesInputObjectSchema = Schema;
