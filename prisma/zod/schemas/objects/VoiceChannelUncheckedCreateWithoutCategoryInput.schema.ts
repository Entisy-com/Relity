import { z } from 'zod';
import { VoiceChannelCreatepermissionsInputObjectSchema } from './VoiceChannelCreatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { MemberUncheckedCreateNestedManyWithoutVoiceChannelInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutVoiceChannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUncheckedCreateWithoutCategoryInput> =
  z
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
      members: z
        .lazy(
          () =>
            MemberUncheckedCreateNestedManyWithoutVoiceChannelInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const VoiceChannelUncheckedCreateWithoutCategoryInputObjectSchema =
  Schema;
