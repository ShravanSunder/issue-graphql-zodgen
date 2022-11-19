import { z } from 'zod';

export const lensAuthenticationSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});
