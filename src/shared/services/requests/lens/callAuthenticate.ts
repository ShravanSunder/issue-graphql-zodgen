import { ethers } from 'ethers';

import {
  AuthChallengeResult,
  AuthenticateDocument,
  AuthenticationResult,
  ChallengeDocument,
} from '~~/generated/gql/graphql';
import { gqlClient } from '~~/server/gqlClient';
import { addressSchema } from '~~/shared/services/schema/addressSchema';

export const callChallenge = async (address: string): Promise<AuthChallengeResult | undefined> => {
  console.log('callChallenge');

  try {
    const validatedAddress = addressSchema.parse(address);
    const response = await gqlClient.query(ChallengeDocument, { request: { address: validatedAddress } }).toPromise();
    return response.data?.challenge;
  } catch (error) {
    console.log('callChallenge error', error);
  }
};

export const callAuthenticate = async (
  address: string,
  signature: string,
  message: string
): Promise<AuthenticationResult | undefined> => {
  console.log('callAuthenticate');

  try {
    addressSchema.parse(address);
    const signatureAddress = ethers.utils.verifyMessage(message, signature);
    console.log(signatureAddress);

    const response = await gqlClient.mutation(AuthenticateDocument, { request: { signature, address } }).toPromise();
    if (response.data == null) {
      throw 'response.data is null';
    }

    return {
      accessToken: response.data.authenticate.accessToken,
      refreshToken: response.data.authenticate.refreshToken,
    };
  } catch (error) {
    console.log('callAuthenticate error', error);
  }
};
