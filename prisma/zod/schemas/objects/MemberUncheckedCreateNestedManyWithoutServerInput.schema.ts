import { z } from 'zod';
import { MemberCreateWithoutServerInputObjectSchema } from './MemberCreateWithoutServerInput.schema';
import { MemberUncheckedCreateWithoutServerInputObjectSchema } from './MemberUncheckedCreateWithoutServerInput.schema';
import { MemberCreateOrConnectWithoutServerInputObjectSchema } from './MemberCreateOrConnectWithoutServerInput.schema';
import { MemberCreateManyServerInputEnvelopeObjectSchema } from './MemberCreateManyServerInputEnvelope.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUncheckedCreateNestedManyWithoutServerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MemberCreateWithoutServerInputObjectSchema),
          z.lazy(() => MemberCreateWithoutServerInputObjectSchema).array(),
          z.lazy(() => MemberUncheckedCreateWithoutServerInputObjectSchema),
          z
            .lazy(() => MemberUncheckedCreateWithoutServerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MemberCreateOrConnectWithoutServerInputObjectSchema),
          z
            .lazy(() => MemberCreateOrConnectWithoutServerInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MemberCreateManyServerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema =
  Schema;
