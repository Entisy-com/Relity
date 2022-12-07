import { z } from 'zod';
import { VoiceChannelCreatepermissionsInputObjectSchema } from './VoiceChannelCreatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelCreateManyCategoryInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    serverid: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    permissions: z
      .union([
        z.lazy(() => VoiceChannelCreatepermissionsInputObjectSchema),
        z.lazy(() => PermissionSchema).array(),
      ])
      .optional(),
    position: z.number().optional(),
  })
  .strict();

export const VoiceChannelCreateManyCategoryInputObjectSchema = Schema;
