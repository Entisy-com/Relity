import { z } from 'zod';
import { PermissionSchema } from '../enums/Permission.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPermissionNullableListFilter> = z
  .object({
    equals: z
      .lazy(() => PermissionSchema)
      .array()
      .optional()
      .nullable(),
    has: z
      .lazy(() => PermissionSchema)
      .optional()
      .nullable(),
    hasEvery: z
      .lazy(() => PermissionSchema)
      .array()
      .optional(),
    hasSome: z
      .lazy(() => PermissionSchema)
      .array()
      .optional(),
    isEmpty: z.boolean().optional(),
  })
  .strict();

export const EnumPermissionNullableListFilterObjectSchema = Schema;
