import { z } from 'zod';
import { MemberCreateWithoutActionTypeInputObjectSchema } from './MemberCreateWithoutActionTypeInput.schema';
import { MemberUncheckedCreateWithoutActionTypeInputObjectSchema } from './MemberUncheckedCreateWithoutActionTypeInput.schema';
import { MemberCreateOrConnectWithoutActionTypeInputObjectSchema } from './MemberCreateOrConnectWithoutActionTypeInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateNestedOneWithoutActionTypeInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MemberCreateWithoutActionTypeInputObjectSchema),
        z.lazy(() => MemberUncheckedCreateWithoutActionTypeInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MemberCreateOrConnectWithoutActionTypeInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MemberWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MemberCreateNestedOneWithoutActionTypeInputObjectSchema = Schema;
