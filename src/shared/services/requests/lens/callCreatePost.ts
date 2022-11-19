import {
  CreatePostTypedDataDocument,
  CreatePostTypedDataMutation,
  CreatePublicPostRequest,
} from '~~/generated/gql/graphql';
import { gqlClient } from '~~/server/gqlClient';

export const callCreatePost = async (
  post: CreatePublicPostRequest
): Promise<CreatePostTypedDataMutation | undefined> => {
  console.log('callChallenge');

  try {
    const response = await gqlClient.mutation(CreatePostTypedDataDocument, { request: post }).toPromise();
    if (response.data == null) {
      throw 'response.data is null';
    }

    return response.data;
  } catch (error) {
    console.log('callChallenge error', error);
  }
};
