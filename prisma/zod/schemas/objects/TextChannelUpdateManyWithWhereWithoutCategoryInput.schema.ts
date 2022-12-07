import { z } from 'zod';
import { TextChannelScalarWhereInputObjectSchema } from './TextChannelScalarWhereInput.schema';
import { TextChannelUpdateManyMutationInputObjectSchema } from './TextChannelUpdateManyMutationInput.schema';
import { TextChannelUncheckedUpdateManyWithoutTextchannelsInputObjectSchema } from './TextChannelUncheckedUpdateManyWithoutTextchannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => TextChannelScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TextChannelUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TextChannelUncheckedUpdateManyWithoutTextchannelsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TextChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema =
  Schema;
