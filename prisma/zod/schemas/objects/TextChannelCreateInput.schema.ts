import { z } from 'zod';
import { TextChannelCreatepermissionsInputObjectSchema } from './TextChannelCreatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { MessageCreateNestedManyWithoutTextChannelInputObjectSchema } from './MessageCreateNestedManyWithoutTextChannelInput.schema';
import { CategoryCreateNestedOneWithoutTextchannelsInputObjectSchema } from './CategoryCreateNestedOneWithoutTextchannelsInput.schema';
import { ServerCreateNestedOneWithoutTextchannelInputObjectSchema } from './ServerCreateNestedOneWithoutTextchannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    permissions: z
      .union([
        z.lazy(() => TextChannelCreatepermissionsInputObjectSchema),
        z.lazy(() => PermissionSchema).array(),
      ])
      .optional(),
    position: z.number().optional(),
    messages: z
      .lazy(() => MessageCreateNestedManyWithoutTextChannelInputObjectSchema)
      .optional(),
    category: z
      .lazy(() => CategoryCreateNestedOneWithoutTextchannelsInputObjectSchema)
      .optional(),
    server: z.lazy(
      () => ServerCreateNestedOneWithoutTextchannelInputObjectSchema,
    ),
  })
  .strict();

export const TextChannelCreateInputObjectSchema = Schema;
