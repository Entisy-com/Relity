import { z } from 'zod';
import { MemberCreateWithoutOwnerOfInputObjectSchema } from './MemberCreateWithoutOwnerOfInput.schema';
import { MemberUncheckedCreateWithoutOwnerOfInputObjectSchema } from './MemberUncheckedCreateWithoutOwnerOfInput.schema';
import { MemberCreateOrConnectWithoutOwnerOfInputObjectSchema } from './MemberCreateOrConnectWithoutOwnerOfInput.schema';
import { MemberUpsertWithoutOwnerOfInputObjectSchema } from './MemberUpsertWithoutOwnerOfInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutOwnerOfInputObjectSchema } from './MemberUpdateWithoutOwnerOfInput.schema';
import { MemberUncheckedUpdateWithoutOwnerOfInputObjectSchema } from './MemberUncheckedUpdateWithoutOwnerOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutOwnerOfNestedInput> =
  z
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
      upsert: z
        .lazy(() => MemberUpsertWithoutOwnerOfInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MemberWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MemberUpdateWithoutOwnerOfInputObjectSchema),
          z.lazy(() => MemberUncheckedUpdateWithoutOwnerOfInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const MemberUpdateOneRequiredWithoutOwnerOfNestedInputObjectSchema =
  Schema;
