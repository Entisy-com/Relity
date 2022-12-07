import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutTextchannelsInputObjectSchema } from './CategoryCreateWithoutTextchannelsInput.schema';
import { CategoryUncheckedCreateWithoutTextchannelsInputObjectSchema } from './CategoryUncheckedCreateWithoutTextchannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutTextchannelsInput> =
  z
    .object({
      where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CategoryCreateWithoutTextchannelsInputObjectSchema),
        z.lazy(
          () => CategoryUncheckedCreateWithoutTextchannelsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CategoryCreateOrConnectWithoutTextchannelsInputObjectSchema =
  Schema;
