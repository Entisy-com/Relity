import { z } from 'zod';
import { ActionTypeWhereUniqueInputObjectSchema } from './ActionTypeWhereUniqueInput.schema';
import { ActionTypeUpdateWithoutMemberInputObjectSchema } from './ActionTypeUpdateWithoutMemberInput.schema';
import { ActionTypeUncheckedUpdateWithoutMemberInputObjectSchema } from './ActionTypeUncheckedUpdateWithoutMemberInput.schema';
import { ActionTypeCreateWithoutMemberInputObjectSchema } from './ActionTypeCreateWithoutMemberInput.schema';
import { ActionTypeUncheckedCreateWithoutMemberInputObjectSchema } from './ActionTypeUncheckedCreateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUpsertWithWhereUniqueWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ActionTypeUpdateWithoutMemberInputObjectSchema),
        z.lazy(() => ActionTypeUncheckedUpdateWithoutMemberInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ActionTypeCreateWithoutMemberInputObjectSchema),
        z.lazy(() => ActionTypeUncheckedCreateWithoutMemberInputObjectSchema),
      ]),
    })
    .strict();

export const ActionTypeUpsertWithWhereUniqueWithoutMemberInputObjectSchema =
  Schema;
