import { z } from 'zod';
import { MemberCreateWithoutUserInputObjectSchema } from './MemberCreateWithoutUserInput.schema';
import { MemberUncheckedCreateWithoutUserInputObjectSchema } from './MemberUncheckedCreateWithoutUserInput.schema';
import { MemberCreateOrConnectWithoutUserInputObjectSchema } from './MemberCreateOrConnectWithoutUserInput.schema';
import { MemberUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './MemberUpsertWithWhereUniqueWithoutUserInput.schema';
import { MemberCreateManyUserInputEnvelopeObjectSchema } from './MemberCreateManyUserInputEnvelope.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './MemberUpdateWithWhereUniqueWithoutUserInput.schema';
import { MemberUpdateManyWithWhereWithoutUserInputObjectSchema } from './MemberUpdateManyWithWhereWithoutUserInput.schema';
import { MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => MemberUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => MemberUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MemberCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => MemberWhereUniqueInputObjectSchema),
        z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => MemberWhereUniqueInputObjectSchema),
        z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => MemberWhereUniqueInputObjectSchema),
        z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => MemberWhereUniqueInputObjectSchema),
        z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => MemberUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => MemberUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MemberUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => MemberUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => MemberScalarWhereInputObjectSchema),
        z.lazy(() => MemberScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MemberUpdateManyWithoutUserNestedInputObjectSchema = Schema;
