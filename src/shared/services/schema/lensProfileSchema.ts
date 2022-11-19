import { z } from 'zod';

import { ProfileQueryRequest } from '~~/generated/gql/graphql';
import { addressSchema } from '~~/shared/services/schema/addressSchema';

export const profileIdentifierSchema = z
  .object({
    /**
     * owner address
     */
    ownedBy: addressSchema.optional(),
    handle: z.string().optional(),
    profileId: z.string().optional(),
  })
  .refine((t) => t.ownedBy || t.handle || t.profileId);

export type ProfileIdentifier = z.infer<typeof profileIdentifierSchema>;

export const profileRequestTransform = profileIdentifierSchema.transform((t) => {
  const result: ProfileQueryRequest = {
    ownedBy: t.ownedBy ? [t.ownedBy] : undefined,
    handles: t.handle ? [t.handle] : undefined,
    profileIds: t.profileId ? [t.profileId] : undefined,
  };
  return result;
});
