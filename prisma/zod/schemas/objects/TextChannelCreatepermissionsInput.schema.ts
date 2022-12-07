import { z } from 'zod';
import { PermissionSchema } from '../enums/Permission.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelCreatepermissionsInput> = z
  .object({
    set: z.lazy(() => PermissionSchema).array(),
  })
  .strict();

export const TextChannelCreatepermissionsInputObjectSchema = Schema;
