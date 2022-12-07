import { z } from 'zod';
import { CategoryCreateWithoutTextchannelsInputObjectSchema } from './CategoryCreateWithoutTextchannelsInput.schema';
import { CategoryUncheckedCreateWithoutTextchannelsInputObjectSchema } from './CategoryUncheckedCreateWithoutTextchannelsInput.schema';
import { CategoryCreateOrConnectWithoutTextchannelsInputObjectSchema } from './CategoryCreateOrConnectWithoutTextchannelsInput.schema';
import { CategoryUpsertWithoutTextchannelsInputObjectSchema } from './CategoryUpsertWithoutTextchannelsInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutTextchannelsInputObjectSchema } from './CategoryUpdateWithoutTextchannelsInput.schema';
import { CategoryUncheckedUpdateWithoutTextchannelsInputObjectSchema } from './CategoryUncheckedUpdateWithoutTextchannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateOneWithoutTextchannelsNestedInput> =
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
      upsert: z
        .lazy(() => CategoryUpsertWithoutTextchannelsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CategoryUpdateWithoutTextchannelsInputObjectSchema),
          z.lazy(
            () => CategoryUncheckedUpdateWithoutTextchannelsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const CategoryUpdateOneWithoutTextchannelsNestedInputObjectSchema =
  Schema;
