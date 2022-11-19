import { cache } from 'react';

import {
  DefaultProfileDocument,
  DefaultProfileQuery,
  DefaultProfileRequest,
  ExploreProfilesDocument,
  ProfileFieldsFragmentDoc,
  ProfileQueryRequest,
  ProfilesDocument,
  ProfileSortCriteria,
  ProfilesQuery,
  UserProfilesDocument,
  UserProfilesQuery,
  UserProfilesQueryVariables,
} from '~~/generated/gql/graphql';
import { fragment } from '~~/models/fragment';
import { gqlClient } from '~~/server/gqlClient';
import { addressSchema } from '~~/shared/services/schema/addressSchema';

export const callExploreProfiles = cache(async () => {
  console.log('fetchProfiles', new Date(Date.now()).toTimeString());
  try {
    /* fetch profiles from Lens API */
    const response = await gqlClient
      .query(ExploreProfilesDocument, { request: { sortCriteria: ProfileSortCriteria.MostPublication } })
      .toPromise();
    /* loop over profiles, create properly formatted ipfs image links */
    const profileData = response?.data?.exploreProfiles?.items?.map((profileInfo) => {
      const profileFragment = fragment(ProfileFieldsFragmentDoc, profileInfo);
      const profile = {
        ...profileFragment,
        bio: profileFragment.bio ?? '',
        name: profileFragment.name ?? '',
        avatarUrl: '',
      };
      const picture = profile.picture;

      if (picture?.__typename === 'MediaSet' && picture?.original?.url) {
        if (picture.original.url.startsWith('ipfs://')) {
          const result = picture.original.url.substring(7, picture.original.url.length);
          profile.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`;
        } else {
          profile.avatarUrl = picture.original.url;
        }
      } else {
        profile.avatarUrl = '/assets/not-found.png';
      }
      return profile;
    });
    return profileData;
  } catch (err) {
    console.warn('error', { err });
    return [];
  }
});

export const callGetDefaultProfile = async (address: string): Promise<DefaultProfileQuery | undefined> => {
  const validatedAddress = addressSchema.parse(address);
  const request: DefaultProfileRequest = { ethereumAddress: validatedAddress };
  const response = await gqlClient.query(DefaultProfileDocument, { request }).toPromise();

  return response.data;
};

export const callGetProfiles = async (request: ProfileQueryRequest): Promise<ProfilesQuery | undefined> => {
  const response = await gqlClient.query(ProfilesDocument, { request }).toPromise();
  return response.data;
};

export const callUserGetProfilesForAddress = async (
  ownedBy: UserProfilesQueryVariables['ownedBy']
): Promise<UserProfilesQuery | undefined> => {
  const response = await gqlClient.query(UserProfilesDocument, { ownedBy }).toPromise();
  return response.data;
};
