import { z } from 'zod';
import { MemberCreateWithoutRolesInputObjectSchema } from './MemberCreateWithoutRolesInput.schema';
import { MemberUncheckedCreateWithoutRolesInputObjectSchema } from './MemberUncheckedCreateWithoutRolesInput.schema';
import { MemberCreateOrConnectWithoutRolesInputObjectSchema } from './MemberCreateOrConnectWithoutRolesInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateNestedManyWithoutRolesInput> = z
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
    connect: z
      .union([
        z.lazy(() => MemberWhereUniqueInputObjectSchema),
        z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MemberCreateNestedManyWithoutRolesInputObjectSchema = Schema;
