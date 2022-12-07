import { z } from 'zod';
import { CategoryCreateWithoutVoicechannelsInputObjectSchema } from './CategoryCreateWithoutVoicechannelsInput.schema';
import { CategoryUncheckedCreateWithoutVoicechannelsInputObjectSchema } from './CategoryUncheckedCreateWithoutVoicechannelsInput.schema';
import { CategoryCreateOrConnectWithoutVoicechannelsInputObjectSchema } from './CategoryCreateOrConnectWithoutVoicechannelsInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutVoicechannelsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CategoryCreateWithoutVoicechannelsInputObjectSchema),
          z.lazy(
            () => CategoryUncheckedCreateWithoutVoicechannelsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => CategoryCreateOrConnectWithoutVoicechannelsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const CategoryCreateNestedOneWithoutVoicechannelsInputObjectSchema =
  Schema;
