import { z } from 'zod';
import { MemberCreateWithoutOwnerOfInputObjectSchema } from './MemberCreateWithoutOwnerOfInput.schema';
import { MemberUncheckedCreateWithoutOwnerOfInputObjectSchema } from './MemberUncheckedCreateWithoutOwnerOfInput.schema';
import { MemberCreateOrConnectWithoutOwnerOfInputObjectSchema } from './MemberCreateOrConnectWithoutOwnerOfInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateNestedOneWithoutOwnerOfInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MemberCreateWithoutOwnerOfInputObjectSchema),
        z.lazy(() => MemberUncheckedCreateWithoutOwnerOfInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MemberCreateOrConnectWithoutOwnerOfInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MemberWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MemberCreateNestedOneWithoutOwnerOfInputObjectSchema = Schema;
