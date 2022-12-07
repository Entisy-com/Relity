import { z } from 'zod';
import { ActionTypeCreateWithoutMemberInputObjectSchema } from './ActionTypeCreateWithoutMemberInput.schema';
import { ActionTypeUncheckedCreateWithoutMemberInputObjectSchema } from './ActionTypeUncheckedCreateWithoutMemberInput.schema';
import { ActionTypeCreateOrConnectWithoutMemberInputObjectSchema } from './ActionTypeCreateOrConnectWithoutMemberInput.schema';
import { ActionTypeCreateManyMemberInputEnvelopeObjectSchema } from './ActionTypeCreateManyMemberInputEnvelope.schema';
import { ActionTypeWhereUniqueInputObjectSchema } from './ActionTypeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeCreateNestedManyWithoutMemberInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ActionTypeCreateWithoutMemberInputObjectSchema),
        z.lazy(() => ActionTypeCreateWithoutMemberInputObjectSchema).array(),
        z.lazy(() => ActionTypeUncheckedCreateWithoutMemberInputObjectSchema),
        z
          .lazy(() => ActionTypeUncheckedCreateWithoutMemberInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ActionTypeCreateOrConnectWithoutMemberInputObjectSchema),
        z
          .lazy(() => ActionTypeCreateOrConnectWithoutMemberInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ActionTypeCreateManyMemberInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
        z.lazy(() => ActionTypeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ActionTypeCreateNestedManyWithoutMemberInputObjectSchema = Schema;
