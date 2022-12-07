import { z } from 'zod';
import { CategoryUpdateWithoutVoicechannelsInputObjectSchema } from './CategoryUpdateWithoutVoicechannelsInput.schema';
import { CategoryUncheckedUpdateWithoutVoicechannelsInputObjectSchema } from './CategoryUncheckedUpdateWithoutVoicechannelsInput.schema';
import { CategoryCreateWithoutVoicechannelsInputObjectSchema } from './CategoryCreateWithoutVoicechannelsInput.schema';
import { CategoryUncheckedCreateWithoutVoicechannelsInputObjectSchema } from './CategoryUncheckedCreateWithoutVoicechannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutVoicechannelsInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutVoicechannelsInputObjectSchema),
      z.lazy(
        () => CategoryUncheckedUpdateWithoutVoicechannelsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutVoicechannelsInputObjectSchema),
      z.lazy(
        () => CategoryUncheckedCreateWithoutVoicechannelsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutVoicechannelsInputObjectSchema = Schema;
