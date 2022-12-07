import { z } from 'zod';
import { MemberCreateWithoutRolesInputObjectSchema } from './MemberCreateWithoutRolesInput.schema';
import { MemberUncheckedCreateWithoutRolesInputObjectSchema } from './MemberUncheckedCreateWithoutRolesInput.schema';
import { MemberCreateOrConnectWithoutRolesInputObjectSchema } from './MemberCreateOrConnectWithoutRolesInput.schema';
import { MemberUpsertWithWhereUniqueWithoutRolesInputObjectSchema } from './MemberUpsertWithWhereUniqueWithoutRolesInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithWhereUniqueWithoutRolesInputObjectSchema } from './MemberUpdateWithWhereUniqueWithoutRolesInput.schema';
import { MemberUpdateManyWithWhereWithoutRolesInputObjectSchema } from './MemberUpdateManyWithWhereWithoutRolesInput.schema';
import { MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateManyWithoutRolesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MemberCreateWithoutRolesInputObjectSchema),
        z.lazy(() => MemberCreateWithoutRolesInputObjectSchema).array(),
        z.lazy(() => MemberUncheckedCreateWithoutRolesInputObjectSchema),
        z
          .lazy(() => MemberUncheckedCreateWithoutRolesInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MemberCreateOrConnectWithoutRolesInputObjectSchema),
        z
          .lazy(() => MemberCreateOrConnectWithoutRolesInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => MemberUpsertWithWhereUniqueWithoutRolesInputObjectSchema),
        z
          .lazy(() => MemberUpsertWithWhereUniqueWithoutRolesInputObjectSchema)
          .array(),
      ])
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
        z.lazy(() => MemberUpdateWithWhereUniqueWithoutRolesInputObjectSchema),
        z
          .lazy(() => MemberUpdateWithWhereUniqueWithoutRolesInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MemberUpdateManyWithWhereWithoutRolesInputObjectSchema),
        z
          .lazy(() => MemberUpdateManyWithWhereWithoutRolesInputObjectSchema)
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

export const MemberUpdateManyWithoutRolesNestedInputObjectSchema = Schema;
