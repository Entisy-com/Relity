import { z } from 'zod';
import { TextChannelCreatepermissionsInputObjectSchema } from './TextChannelCreatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { MessageUncheckedCreateNestedManyWithoutTextChannelInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutTextChannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUncheckedCreateWithoutCategoryInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      serverid: z.string(),
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
        .lazy(
          () =>
            MessageUncheckedCreateNestedManyWithoutTextChannelInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const TextChannelUncheckedCreateWithoutCategoryInputObjectSchema =
  Schema;