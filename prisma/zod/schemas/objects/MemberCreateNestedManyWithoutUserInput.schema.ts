import { z } from 'zod';
import { MemberCreateWithoutUserInputObjectSchema } from './MemberCreateWithoutUserInput.schema';
import { MemberUncheckedCreateWithoutUserInputObjectSchema } from './MemberUncheckedCreateWithoutUserInput.schema';
import { MemberCreateOrConnectWithoutUserInputObjectSchema } from './MemberCreateOrConnectWithoutUserInput.schema';
import { MemberCreateManyUserInputEnvelopeObjectSchema } from './MemberCreateManyUserInputEnvelope.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MemberCreateWithoutUserInputObjectSchema),
        z.lazy(() => MemberCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => MemberUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => MemberUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MemberCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => MemberCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MemberCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MemberWhereUniqueInputObjectSchema),
        z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MemberCreateNestedManyWithoutUserInputObjectSchema = Schema;
