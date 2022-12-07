import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutVoicechannelsInputObjectSchema } from './CategoryCreateWithoutVoicechannelsInput.schema';
import { CategoryUncheckedCreateWithoutVoicechannelsInputObjectSchema } from './CategoryUncheckedCreateWithoutVoicechannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutVoicechannelsInput> =
  z
    .object({
      where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CategoryCreateWithoutVoicechannelsInputObjectSchema),
        z.lazy(
          () => CategoryUncheckedCreateWithoutVoicechannelsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CategoryCreateOrConnectWithoutVoicechannelsInputObjectSchema =
  Schema;
