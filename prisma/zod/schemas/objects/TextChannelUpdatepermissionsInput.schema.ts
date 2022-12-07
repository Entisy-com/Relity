import { z } from 'zod';
import { PermissionSchema } from '../enums/Permission.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUpdatepermissionsInput> = z
  .object({
    set: z
      .lazy(() => PermissionSchema)
      .array()
      .optional(),
    push: z
      .union([
        z.lazy(() => PermissionSchema),
        z.lazy(() => PermissionSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TextChannelUpdatepermissionsInputObjectSchema = Schema;
