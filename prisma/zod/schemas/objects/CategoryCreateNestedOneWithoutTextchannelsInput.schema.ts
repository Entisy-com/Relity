import { z } from 'zod';
import { CategoryCreateWithoutTextchannelsInputObjectSchema } from './CategoryCreateWithoutTextchannelsInput.schema';
import { CategoryUncheckedCreateWithoutTextchannelsInputObjectSchema } from './CategoryUncheckedCreateWithoutTextchannelsInput.schema';
import { CategoryCreateOrConnectWithoutTextchannelsInputObjectSchema } from './CategoryCreateOrConnectWithoutTextchannelsInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutTextchannelsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CategoryCreateWithoutTextchannelsInputObjectSchema),
          z.lazy(
            () => CategoryUncheckedCreateWithoutTextchannelsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CategoryCreateOrConnectWithoutTextchannelsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const CategoryCreateNestedOneWithoutTextchannelsInputObjectSchema =
  Schema;
