import { z } from 'zod';

export const OnlineStatusSchema = z.enum(['ONLINE', 'AWAY', 'DND', 'OFFLINE']);
