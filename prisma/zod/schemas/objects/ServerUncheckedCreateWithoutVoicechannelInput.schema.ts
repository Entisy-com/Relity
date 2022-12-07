import { z } from 'zod';
import { CategoryUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './CategoryUncheckedCreateNestedManyWithoutServerInput.schema';
import { RoleUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutServerInput.schema';
import { TextChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './TextChannelUncheckedCreateNestedManyWithoutServerInput.schema';
import { MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutServerInput.schema';
import { UserUncheckedCreateNestedManyWithoutBannedonInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutBannedonInput.schema';
import { ActionLogUncheckedCreateNestedOneWithoutServerInputObjectSchema } from './ActionLogUncheckedCreateNestedOneWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUncheckedCreateWithoutVoicechannelInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      ownerid: z.string(),
      pfp: z.string().optional(),
      banner: z.string().optional(),
      categories: z
        .lazy(
          () => CategoryUncheckedCreateNestedManyWithoutServerInputObjectSchema,
        )
        .optional(),
      roles: z
        .lazy(() => RoleUncheckedCreateNestedManyWithoutServerInputObjectSchema)
        .optional(),
      textchannel: z
        .lazy(
          () =>
            TextChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema,
        )
        .optional(),
      members: z
        .lazy(
          () => MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema,
        )
        .optional(),
      bannedUser: z
        .lazy(
          () => UserUncheckedCreateNestedManyWithoutBannedonInputObjectSchema,
        )
        .optional(),
      actionLog: z
        .lazy(
          () => ActionLogUncheckedCreateNestedOneWithoutServerInputObjectSchema,
        )
        .optional(),
      updatedAt: z.date().optional(),
      createdAt: z.date().optional(),
    })
    .strict();

export const ServerUncheckedCreateWithoutVoicechannelInputObjectSchema = Schema;
