import { z } from 'zod';
import { CategoryUpdateWithoutTextchannelsInputObjectSchema } from './CategoryUpdateWithoutTextchannelsInput.schema';
import { CategoryUncheckedUpdateWithoutTextchannelsInputObjectSchema } from './CategoryUncheckedUpdateWithoutTextchannelsInput.schema';
import { CategoryCreateWithoutTextchannelsInputObjectSchema } from './CategoryCreateWithoutTextchannelsInput.schema';
import { CategoryUncheckedCreateWithoutTextchannelsInputObjectSchema } from './CategoryUncheckedCreateWithoutTextchannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutTextchannelsInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutTextchannelsInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutTextchannelsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutTextchannelsInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutTextchannelsInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutTextchannelsInputObjectSchema = Schema;
