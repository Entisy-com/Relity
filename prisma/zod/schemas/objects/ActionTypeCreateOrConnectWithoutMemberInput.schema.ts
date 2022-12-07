import { z } from 'zod';
import { ActionTypeWhereUniqueInputObjectSchema } from './ActionTypeWhereUniqueInput.schema';
import { ActionTypeCreateWithoutMemberInputObjectSchema } from './ActionTypeCreateWithoutMemberInput.schema';
import { ActionTypeUncheckedCreateWithoutMemberInputObjectSchema } from './ActionTypeUncheckedCreateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeCreateOrConnectWithoutMemberInput> = z
  .object({
    where: z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ActionTypeCreateWithoutMemberInputObjectSchema),
      z.lazy(() => ActionTypeUncheckedCreateWithoutMemberInputObjectSchema),
    ]),
  })
  .strict();

export const ActionTypeCreateOrConnectWithoutMemberInputObjectSchema = Schema;
