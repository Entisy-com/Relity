import { z } from 'zod';
import { ServerUserPositionWhereInputObjectSchema } from './objects/ServerUserPositionWhereInput.schema';
import { ServerUserPositionOrderByWithRelationInputObjectSchema } from './objects/ServerUserPositionOrderByWithRelationInput.schema';
import { ServerUserPositionWhereUniqueInputObjectSchema } from './objects/ServerUserPositionWhereUniqueInput.schema';
import { ServerUserPositionScalarFieldEnumSchema } from './enums/ServerUserPositionScalarFieldEnum.schema';

export const ServerUserPositionFindManySchema = z.object({
  where: ServerUserPositionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ServerUserPositionOrderByWithRelationInputObjectSchema,
      ServerUserPositionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ServerUserPositionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ServerUserPositionScalarFieldEnumSchema).optional(),
});
