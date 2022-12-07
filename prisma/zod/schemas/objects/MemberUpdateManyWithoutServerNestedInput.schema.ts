import { z } from 'zod';
import { MemberCreateWithoutServerInputObjectSchema } from './MemberCreateWithoutServerInput.schema';
import { MemberUncheckedCreateWithoutServerInputObjectSchema } from './MemberUncheckedCreateWithoutServerInput.schema';
import { MemberCreateOrConnectWithoutServerInputObjectSchema } from './MemberCreateOrConnectWithoutServerInput.schema';
import { MemberUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './MemberUpsertWithWhereUniqueWithoutServerInput.schema';
import { MemberCreateManyServerInputEnvelopeObjectSchema } from './MemberCreateManyServerInputEnvelope.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './MemberUpdateWithWhereUniqueWithoutServerInput.schema';
import { MemberUpdateManyWithWhereWithoutServerInputObjectSchema } from './MemberUpdateManyWithWhereWithoutServerInput.schema';
import { MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateManyWithoutServerNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => MemberUpsertWithWhereUniqueWithoutServerInputObjectSchema),
        z
          .lazy(() => MemberUpsertWithWhereUniqueWithoutServerInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MemberCreateManyServerInputEnvelopeObjectSchema)
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
        z.lazy(() => MemberUpdateWithWhereUniqueWithoutServerInputObjectSchema),
        z
          .lazy(() => MemberUpdateWithWhereUniqueWithoutServerInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MemberUpdateManyWithWhereWithoutServerInputObjectSchema),
        z
          .lazy(() => MemberUpdateManyWithWhereWithoutServerInputObjectSchema)
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

export const MemberUpdateManyWithoutServerNestedInputObjectSchema = Schema;
