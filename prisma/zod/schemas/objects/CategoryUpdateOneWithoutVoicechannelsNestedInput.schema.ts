import { z } from 'zod';
import { CategoryCreateWithoutVoicechannelsInputObjectSchema } from './CategoryCreateWithoutVoicechannelsInput.schema';
import { CategoryUncheckedCreateWithoutVoicechannelsInputObjectSchema } from './CategoryUncheckedCreateWithoutVoicechannelsInput.schema';
import { CategoryCreateOrConnectWithoutVoicechannelsInputObjectSchema } from './CategoryCreateOrConnectWithoutVoicechannelsInput.schema';
import { CategoryUpsertWithoutVoicechannelsInputObjectSchema } from './CategoryUpsertWithoutVoicechannelsInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutVoicechannelsInputObjectSchema } from './CategoryUpdateWithoutVoicechannelsInput.schema';
import { CategoryUncheckedUpdateWithoutVoicechannelsInputObjectSchema } from './CategoryUncheckedUpdateWithoutVoicechannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateOneWithoutVoicechannelsNestedInput> =
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
      upsert: z
        .lazy(() => CategoryUpsertWithoutVoicechannelsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CategoryUpdateWithoutVoicechannelsInputObjectSchema),
          z.lazy(
            () => CategoryUncheckedUpdateWithoutVoicechannelsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const CategoryUpdateOneWithoutVoicechannelsNestedInputObjectSchema =
  Schema;
