import { z } from 'zod';
import { VoiceChannelCreatepermissionsInputObjectSchema } from './VoiceChannelCreatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { MemberCreateNestedManyWithoutVoiceChannelInputObjectSchema } from './MemberCreateNestedManyWithoutVoiceChannelInput.schema';
import { CategoryCreateNestedOneWithoutVoicechannelsInputObjectSchema } from './CategoryCreateNestedOneWithoutVoicechannelsInput.schema';
import { ServerCreateNestedOneWithoutVoicechannelInputObjectSchema } from './ServerCreateNestedOneWithoutVoicechannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
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
      .lazy(() => MemberCreateNestedManyWithoutVoiceChannelInputObjectSchema)
      .optional(),
    category: z
      .lazy(() => CategoryCreateNestedOneWithoutVoicechannelsInputObjectSchema)
      .optional(),
    server: z.lazy(
      () => ServerCreateNestedOneWithoutVoicechannelInputObjectSchema,
    ),
  })
  .strict();

export const VoiceChannelCreateInputObjectSchema = Schema;
