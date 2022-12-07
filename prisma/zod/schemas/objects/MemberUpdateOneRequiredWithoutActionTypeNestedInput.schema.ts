import { z } from 'zod';
import { MemberCreateWithoutActionTypeInputObjectSchema } from './MemberCreateWithoutActionTypeInput.schema';
import { MemberUncheckedCreateWithoutActionTypeInputObjectSchema } from './MemberUncheckedCreateWithoutActionTypeInput.schema';
import { MemberCreateOrConnectWithoutActionTypeInputObjectSchema } from './MemberCreateOrConnectWithoutActionTypeInput.schema';
import { MemberUpsertWithoutActionTypeInputObjectSchema } from './MemberUpsertWithoutActionTypeInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutActionTypeInputObjectSchema } from './MemberUpdateWithoutActionTypeInput.schema';
import { MemberUncheckedUpdateWithoutActionTypeInputObjectSchema } from './MemberUncheckedUpdateWithoutActionTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutActionTypeNestedInput> =
  z
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
      upsert: z
        .lazy(() => MemberUpsertWithoutActionTypeInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MemberWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MemberUpdateWithoutActionTypeInputObjectSchema),
          z.lazy(() => MemberUncheckedUpdateWithoutActionTypeInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const MemberUpdateOneRequiredWithoutActionTypeNestedInputObjectSchema =
  Schema;
