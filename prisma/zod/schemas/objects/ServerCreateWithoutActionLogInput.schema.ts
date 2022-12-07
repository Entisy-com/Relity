import { z } from 'zod';
import { CategoryCreateNestedManyWithoutServerInputObjectSchema } from './CategoryCreateNestedManyWithoutServerInput.schema';
import { RoleCreateNestedManyWithoutServerInputObjectSchema } from './RoleCreateNestedManyWithoutServerInput.schema';
import { TextChannelCreateNestedManyWithoutServerInputObjectSchema } from './TextChannelCreateNestedManyWithoutServerInput.schema';
import { VoiceChannelCreateNestedManyWithoutServerInputObjectSchema } from './VoiceChannelCreateNestedManyWithoutServerInput.schema';
import { MemberCreateNestedOneWithoutOwnerOfInputObjectSchema } from './MemberCreateNestedOneWithoutOwnerOfInput.schema';
import { MemberCreateNestedManyWithoutServerInputObjectSchema } from './MemberCreateNestedManyWithoutServerInput.schema';
import { UserCreateNestedManyWithoutBannedonInputObjectSchema } from './UserCreateNestedManyWithoutBannedonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateWithoutActionLogInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    pfp: z.string().optional(),
    banner: z.string().optional(),
    categories: z
      .lazy(() => CategoryCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    roles: z
      .lazy(() => RoleCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    textchannel: z
      .lazy(() => TextChannelCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    voicechannel: z
      .lazy(() => VoiceChannelCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    owner: z.lazy(() => MemberCreateNestedOneWithoutOwnerOfInputObjectSchema),
    members: z
      .lazy(() => MemberCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    bannedUser: z
      .lazy(() => UserCreateNestedManyWithoutBannedonInputObjectSchema)
      .optional(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const ServerCreateWithoutActionLogInputObjectSchema = Schema;
