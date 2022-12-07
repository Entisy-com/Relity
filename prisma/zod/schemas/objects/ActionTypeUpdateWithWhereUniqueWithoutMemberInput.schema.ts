import { z } from 'zod';
import { ActionTypeWhereUniqueInputObjectSchema } from './ActionTypeWhereUniqueInput.schema';
import { ActionTypeUpdateWithoutMemberInputObjectSchema } from './ActionTypeUpdateWithoutMemberInput.schema';
import { ActionTypeUncheckedUpdateWithoutMemberInputObjectSchema } from './ActionTypeUncheckedUpdateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUpdateWithWhereUniqueWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ActionTypeUpdateWithoutMemberInputObjectSchema),
        z.lazy(() => ActionTypeUncheckedUpdateWithoutMemberInputObjectSchema),
      ]),
    })
    .strict();

export const ActionTypeUpdateWithWhereUniqueWithoutMemberInputObjectSchema =
  Schema;
