import { z } from 'zod';
import { TextChannelScalarWhereInputObjectSchema } from './TextChannelScalarWhereInput.schema';
import { TextChannelUpdateManyMutationInputObjectSchema } from './TextChannelUpdateManyMutationInput.schema';
import { TextChannelUncheckedUpdateManyWithoutTextchannelInputObjectSchema } from './TextChannelUncheckedUpdateManyWithoutTextchannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUpdateManyWithWhereWithoutServerInput> =
  z
    .object({
      where: z.lazy(() => TextChannelScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TextChannelUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TextChannelUncheckedUpdateManyWithoutTextchannelInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TextChannelUpdateManyWithWhereWithoutServerInputObjectSchema =
  Schema;
