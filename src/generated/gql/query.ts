/* eslint-disable */
import * as Types from "./graphql";

import { ethers } from "ethers";
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: "POST",
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
export const ProfileFieldsFragmentDoc = `
    fragment ProfileFields on Profile {
  id
  name
  handle
  bio
  ownedBy
  isFollowedByMe
  stats {
    totalFollowers
    totalFollowing
  }
  attributes {
    key
    value
  }
  picture {
    ... on MediaSet {
      original {
        url
      }
    }
    ... on NftImage {
      uri
    }
  }
  followModule {
    __typename
  }
}
    `;
export const CollectModuleFieldsFragmentDoc = `
    fragment CollectModuleFields on CollectModule {
  ... on FreeCollectModuleSettings {
    type
    contractAddress
    followerOnly
  }
  ... on FeeCollectModuleSettings {
    type
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    endTimestamp
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
  ... on TimedFeeCollectModuleSettings {
    type
    endTimestamp
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
}
    `;
export const StatsFieldsFragmentDoc = `
    fragment StatsFields on PublicationStats {
  totalUpvotes
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}
    `;
export const MetadataFieldsFragmentDoc = `
    fragment MetadataFields on MetadataOutput {
  name
  description
  content
  image
  attributes {
    traitType
    value
  }
  cover {
    original {
      url
    }
  }
  media {
    original {
      url
      mimeType
    }
  }
}
    `;
export const PostFieldsFragmentDoc = `
    fragment PostFields on Post {
  id
  profile {
    ...ProfileFields
  }
  reaction(request: $reactionRequest)
  mirrors(by: $profileId)
  canComment(profileId: $profileId) {
    result
  }
  canMirror(profileId: $profileId) {
    result
  }
  hasCollectedByMe
  collectedBy {
    address
    defaultProfile {
      ...ProfileFields
    }
  }
  collectModule {
    ...CollectModuleFields
  }
  stats {
    ...StatsFields
  }
  metadata {
    ...MetadataFields
  }
  hidden
  createdAt
  appId
}
    ${ProfileFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}
${StatsFieldsFragmentDoc}
${MetadataFieldsFragmentDoc}`;
export const MirrorFieldsFragmentDoc = `
    fragment MirrorFields on Mirror {
  id
  profile {
    ...ProfileFields
  }
  reaction(request: $reactionRequest)
  canComment(profileId: $profileId) {
    result
  }
  canMirror(profileId: $profileId) {
    result
  }
  collectModule {
    ...CollectModuleFields
  }
  stats {
    ...StatsFields
  }
  metadata {
    ...MetadataFields
  }
  hidden
  mirrorOf {
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      id
      profile {
        ...ProfileFields
      }
      reaction(request: $reactionRequest)
      mirrors(by: $profileId)
      canComment(profileId: $profileId) {
        result
      }
      canMirror(profileId: $profileId) {
        result
      }
      stats {
        ...StatsFields
      }
      createdAt
    }
  }
  createdAt
  appId
}
    ${ProfileFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}
${StatsFieldsFragmentDoc}
${MetadataFieldsFragmentDoc}
${PostFieldsFragmentDoc}`;
export const CommentFieldsFragmentDoc = `
    fragment CommentFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  reaction(request: $reactionRequest)
  mirrors(by: $profileId)
  canComment(profileId: $profileId) {
    result
  }
  canMirror(profileId: $profileId) {
    result
  }
  hasCollectedByMe
  collectedBy {
    address
    defaultProfile {
      ...ProfileFields
    }
  }
  collectModule {
    ...CollectModuleFields
  }
  stats {
    ...StatsFields
  }
  metadata {
    ...MetadataFields
  }
  hidden
  createdAt
  appId
  commentOn {
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      id
      profile {
        ...ProfileFields
      }
      reaction(request: $reactionRequest)
      mirrors(by: $profileId)
      canComment(profileId: $profileId) {
        result
      }
      canMirror(profileId: $profileId) {
        result
      }
      hasCollectedByMe
      collectedBy {
        address
        defaultProfile {
          handle
        }
      }
      collectModule {
        ...CollectModuleFields
      }
      metadata {
        ...MetadataFields
      }
      stats {
        ...StatsFields
      }
      mainPost {
        ... on Post {
          ...PostFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      hidden
      createdAt
    }
    ... on Mirror {
      ...MirrorFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}
${StatsFieldsFragmentDoc}
${MetadataFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;
export const RelayerResultFieldsFragmentDoc = `
    fragment RelayerResultFields on RelayResult {
  ... on RelayerResult {
    txHash
    txId
  }
  ... on RelayError {
    reason
  }
}
    `;
export const AddReactionDocument = `
    mutation AddReaction($request: ReactionRequest!) {
  addReaction(request: $request)
}
    `;
export const useAddReactionMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.AddReactionMutation,
    TError,
    Types.AddReactionMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.AddReactionMutation,
    TError,
    Types.AddReactionMutationVariables,
    TContext
  >(
    ["AddReaction"],
    (variables?: Types.AddReactionMutationVariables) =>
      fetcher<Types.AddReactionMutation, Types.AddReactionMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        AddReactionDocument,
        variables
      )(),
    options
  );
export const AuthenticateDocument = `
    mutation Authenticate($request: SignedAuthChallenge!) {
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export const useAuthenticateMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.AuthenticateMutation,
    TError,
    Types.AuthenticateMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.AuthenticateMutation,
    TError,
    Types.AuthenticateMutationVariables,
    TContext
  >(
    ["Authenticate"],
    (variables?: Types.AuthenticateMutationVariables) =>
      fetcher<Types.AuthenticateMutation, Types.AuthenticateMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        AuthenticateDocument,
        variables
      )(),
    options
  );
export const BroadcastDocument = `
    mutation Broadcast($request: BroadcastRequest!) {
  broadcast(request: $request) {
    ... on RelayerResult {
      txHash
      txId
    }
    ... on RelayError {
      reason
    }
  }
}
    `;
export const useBroadcastMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.BroadcastMutation,
    TError,
    Types.BroadcastMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.BroadcastMutation,
    TError,
    Types.BroadcastMutationVariables,
    TContext
  >(
    ["Broadcast"],
    (variables?: Types.BroadcastMutationVariables) =>
      fetcher<Types.BroadcastMutation, Types.BroadcastMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        BroadcastDocument,
        variables
      )(),
    options
  );
export const CreateBurnProfileTypedDataDocument = `
    mutation CreateBurnProfileTypedData($options: TypedDataOptions, $request: BurnProfileRequest!) {
  createBurnProfileTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        BurnWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        tokenId
      }
    }
  }
}
    `;
export const useCreateBurnProfileTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateBurnProfileTypedDataMutation,
    TError,
    Types.CreateBurnProfileTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateBurnProfileTypedDataMutation,
    TError,
    Types.CreateBurnProfileTypedDataMutationVariables,
    TContext
  >(
    ["CreateBurnProfileTypedData"],
    (variables?: Types.CreateBurnProfileTypedDataMutationVariables) =>
      fetcher<
        Types.CreateBurnProfileTypedDataMutation,
        Types.CreateBurnProfileTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateBurnProfileTypedDataDocument,
        variables
      )(),
    options
  );
export const CreateCollectTypedDataDocument = `
    mutation CreateCollectTypedData($options: TypedDataOptions, $request: CreateCollectRequest!) {
  createCollectTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      types {
        CollectWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        pubId
        data
      }
    }
  }
}
    `;
export const useCreateCollectTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateCollectTypedDataMutation,
    TError,
    Types.CreateCollectTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateCollectTypedDataMutation,
    TError,
    Types.CreateCollectTypedDataMutationVariables,
    TContext
  >(
    ["CreateCollectTypedData"],
    (variables?: Types.CreateCollectTypedDataMutationVariables) =>
      fetcher<
        Types.CreateCollectTypedDataMutation,
        Types.CreateCollectTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateCollectTypedDataDocument,
        variables
      )(),
    options
  );
export const CreateCommentTypedDataDocument = `
    mutation CreateCommentTypedData($options: TypedDataOptions, $request: CreatePublicCommentRequest!) {
  createCommentTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      types {
        CommentWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        profileIdPointed
        pubIdPointed
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleData
        referenceModuleInitData
      }
    }
  }
}
    `;
export const useCreateCommentTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateCommentTypedDataMutation,
    TError,
    Types.CreateCommentTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateCommentTypedDataMutation,
    TError,
    Types.CreateCommentTypedDataMutationVariables,
    TContext
  >(
    ["CreateCommentTypedData"],
    (variables?: Types.CreateCommentTypedDataMutationVariables) =>
      fetcher<
        Types.CreateCommentTypedDataMutation,
        Types.CreateCommentTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateCommentTypedDataDocument,
        variables
      )(),
    options
  );
export const CreateCommentViaDispatcherDocument = `
    mutation CreateCommentViaDispatcher($request: CreatePublicCommentRequest!) {
  createCommentViaDispatcher(request: $request) {
    ...RelayerResultFields
  }
}
    ${RelayerResultFieldsFragmentDoc}`;
export const useCreateCommentViaDispatcherMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateCommentViaDispatcherMutation,
    TError,
    Types.CreateCommentViaDispatcherMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateCommentViaDispatcherMutation,
    TError,
    Types.CreateCommentViaDispatcherMutationVariables,
    TContext
  >(
    ["CreateCommentViaDispatcher"],
    (variables?: Types.CreateCommentViaDispatcherMutationVariables) =>
      fetcher<
        Types.CreateCommentViaDispatcherMutation,
        Types.CreateCommentViaDispatcherMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateCommentViaDispatcherDocument,
        variables
      )(),
    options
  );
export const CreateFollowTypedDataDocument = `
    mutation CreateFollowTypedData($options: TypedDataOptions, $request: FollowRequest!) {
  createFollowTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        FollowWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        profileIds
        datas
      }
    }
  }
}
    `;
export const useCreateFollowTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateFollowTypedDataMutation,
    TError,
    Types.CreateFollowTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateFollowTypedDataMutation,
    TError,
    Types.CreateFollowTypedDataMutationVariables,
    TContext
  >(
    ["CreateFollowTypedData"],
    (variables?: Types.CreateFollowTypedDataMutationVariables) =>
      fetcher<
        Types.CreateFollowTypedDataMutation,
        Types.CreateFollowTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateFollowTypedDataDocument,
        variables
      )(),
    options
  );
export const CreateMirrorTypedDataDocument = `
    mutation CreateMirrorTypedData($options: TypedDataOptions, $request: CreateMirrorRequest!) {
  createMirrorTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      types {
        MirrorWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        profileIdPointed
        pubIdPointed
        referenceModule
        referenceModuleData
        referenceModuleInitData
      }
    }
  }
}
    `;
export const useCreateMirrorTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateMirrorTypedDataMutation,
    TError,
    Types.CreateMirrorTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateMirrorTypedDataMutation,
    TError,
    Types.CreateMirrorTypedDataMutationVariables,
    TContext
  >(
    ["CreateMirrorTypedData"],
    (variables?: Types.CreateMirrorTypedDataMutationVariables) =>
      fetcher<
        Types.CreateMirrorTypedDataMutation,
        Types.CreateMirrorTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateMirrorTypedDataDocument,
        variables
      )(),
    options
  );
export const CreateMirrorViaDispatcherDocument = `
    mutation CreateMirrorViaDispatcher($request: CreateMirrorRequest!) {
  createMirrorViaDispatcher(request: $request) {
    ...RelayerResultFields
  }
}
    ${RelayerResultFieldsFragmentDoc}`;
export const useCreateMirrorViaDispatcherMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateMirrorViaDispatcherMutation,
    TError,
    Types.CreateMirrorViaDispatcherMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateMirrorViaDispatcherMutation,
    TError,
    Types.CreateMirrorViaDispatcherMutationVariables,
    TContext
  >(
    ["CreateMirrorViaDispatcher"],
    (variables?: Types.CreateMirrorViaDispatcherMutationVariables) =>
      fetcher<
        Types.CreateMirrorViaDispatcherMutation,
        Types.CreateMirrorViaDispatcherMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateMirrorViaDispatcherDocument,
        variables
      )(),
    options
  );
export const CreatePostTypedDataDocument = `
    mutation CreatePostTypedData($options: TypedDataOptions, $request: CreatePublicPostRequest!) {
  createPostTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      types {
        PostWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
    }
  }
}
    `;
export const useCreatePostTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreatePostTypedDataMutation,
    TError,
    Types.CreatePostTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreatePostTypedDataMutation,
    TError,
    Types.CreatePostTypedDataMutationVariables,
    TContext
  >(
    ["CreatePostTypedData"],
    (variables?: Types.CreatePostTypedDataMutationVariables) =>
      fetcher<
        Types.CreatePostTypedDataMutation,
        Types.CreatePostTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreatePostTypedDataDocument,
        variables
      )(),
    options
  );
export const CreatePostViaDispatcherDocument = `
    mutation CreatePostViaDispatcher($request: CreatePublicPostRequest!) {
  createPostViaDispatcher(request: $request) {
    ...RelayerResultFields
  }
}
    ${RelayerResultFieldsFragmentDoc}`;
export const useCreatePostViaDispatcherMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreatePostViaDispatcherMutation,
    TError,
    Types.CreatePostViaDispatcherMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreatePostViaDispatcherMutation,
    TError,
    Types.CreatePostViaDispatcherMutationVariables,
    TContext
  >(
    ["CreatePostViaDispatcher"],
    (variables?: Types.CreatePostViaDispatcherMutationVariables) =>
      fetcher<
        Types.CreatePostViaDispatcherMutation,
        Types.CreatePostViaDispatcherMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreatePostViaDispatcherDocument,
        variables
      )(),
    options
  );
export const CreateProfileDocument = `
    mutation CreateProfile($request: CreateProfileRequest!) {
  createProfile(request: $request) {
    ...RelayerResultFields
  }
}
    ${RelayerResultFieldsFragmentDoc}`;
export const useCreateProfileMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateProfileMutation,
    TError,
    Types.CreateProfileMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateProfileMutation,
    TError,
    Types.CreateProfileMutationVariables,
    TContext
  >(
    ["CreateProfile"],
    (variables?: Types.CreateProfileMutationVariables) =>
      fetcher<
        Types.CreateProfileMutation,
        Types.CreateProfileMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateProfileDocument,
        variables
      )(),
    options
  );
export const CreateSetDefaultProfileTypedDataDocument = `
    mutation CreateSetDefaultProfileTypedData($options: TypedDataOptions, $request: CreateSetDefaultProfileRequest!) {
  createSetDefaultProfileTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        SetDefaultProfileWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        wallet
        profileId
      }
    }
  }
}
    `;
export const useCreateSetDefaultProfileTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateSetDefaultProfileTypedDataMutation,
    TError,
    Types.CreateSetDefaultProfileTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateSetDefaultProfileTypedDataMutation,
    TError,
    Types.CreateSetDefaultProfileTypedDataMutationVariables,
    TContext
  >(
    ["CreateSetDefaultProfileTypedData"],
    (variables?: Types.CreateSetDefaultProfileTypedDataMutationVariables) =>
      fetcher<
        Types.CreateSetDefaultProfileTypedDataMutation,
        Types.CreateSetDefaultProfileTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateSetDefaultProfileTypedDataDocument,
        variables
      )(),
    options
  );
export const CreateSetDispatcherTypedDataDocument = `
    mutation CreateSetDispatcherTypedData($options: TypedDataOptions, $request: SetDispatcherRequest!) {
  createSetDispatcherTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      types {
        SetDispatcherWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        dispatcher
      }
    }
  }
}
    `;
export const useCreateSetDispatcherTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateSetDispatcherTypedDataMutation,
    TError,
    Types.CreateSetDispatcherTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateSetDispatcherTypedDataMutation,
    TError,
    Types.CreateSetDispatcherTypedDataMutationVariables,
    TContext
  >(
    ["CreateSetDispatcherTypedData"],
    (variables?: Types.CreateSetDispatcherTypedDataMutationVariables) =>
      fetcher<
        Types.CreateSetDispatcherTypedDataMutation,
        Types.CreateSetDispatcherTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateSetDispatcherTypedDataDocument,
        variables
      )(),
    options
  );
export const CreateSetFollowModuleTypedDataDocument = `
    mutation CreateSetFollowModuleTypedData($options: TypedDataOptions, $request: CreateSetFollowModuleRequest!) {
  createSetFollowModuleTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      types {
        SetFollowModuleWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        followModule
        followModuleInitData
      }
    }
  }
}
    `;
export const useCreateSetFollowModuleTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateSetFollowModuleTypedDataMutation,
    TError,
    Types.CreateSetFollowModuleTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateSetFollowModuleTypedDataMutation,
    TError,
    Types.CreateSetFollowModuleTypedDataMutationVariables,
    TContext
  >(
    ["CreateSetFollowModuleTypedData"],
    (variables?: Types.CreateSetFollowModuleTypedDataMutationVariables) =>
      fetcher<
        Types.CreateSetFollowModuleTypedDataMutation,
        Types.CreateSetFollowModuleTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateSetFollowModuleTypedDataDocument,
        variables
      )(),
    options
  );
export const CreateSetProfileImageUriTypedDataDocument = `
    mutation CreateSetProfileImageURITypedData($options: TypedDataOptions, $request: UpdateProfileImageRequest!) {
  createSetProfileImageURITypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        SetProfileImageURIWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        imageURI
        profileId
      }
    }
  }
}
    `;
export const useCreateSetProfileImageUriTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateSetProfileImageUriTypedDataMutation,
    TError,
    Types.CreateSetProfileImageUriTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateSetProfileImageUriTypedDataMutation,
    TError,
    Types.CreateSetProfileImageUriTypedDataMutationVariables,
    TContext
  >(
    ["CreateSetProfileImageURITypedData"],
    (variables?: Types.CreateSetProfileImageUriTypedDataMutationVariables) =>
      fetcher<
        Types.CreateSetProfileImageUriTypedDataMutation,
        Types.CreateSetProfileImageUriTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateSetProfileImageUriTypedDataDocument,
        variables
      )(),
    options
  );
export const CreateSetProfileImageUriViaDispatcherDocument = `
    mutation CreateSetProfileImageURIViaDispatcher($request: UpdateProfileImageRequest!) {
  createSetProfileImageURIViaDispatcher(request: $request) {
    ...RelayerResultFields
  }
}
    ${RelayerResultFieldsFragmentDoc}`;
export const useCreateSetProfileImageUriViaDispatcherMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateSetProfileImageUriViaDispatcherMutation,
    TError,
    Types.CreateSetProfileImageUriViaDispatcherMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateSetProfileImageUriViaDispatcherMutation,
    TError,
    Types.CreateSetProfileImageUriViaDispatcherMutationVariables,
    TContext
  >(
    ["CreateSetProfileImageURIViaDispatcher"],
    (
      variables?: Types.CreateSetProfileImageUriViaDispatcherMutationVariables
    ) =>
      fetcher<
        Types.CreateSetProfileImageUriViaDispatcherMutation,
        Types.CreateSetProfileImageUriViaDispatcherMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateSetProfileImageUriViaDispatcherDocument,
        variables
      )(),
    options
  );
export const CreateSetProfileMetadataTypedDataDocument = `
    mutation CreateSetProfileMetadataTypedData($request: CreatePublicSetProfileMetadataURIRequest!) {
  createSetProfileMetadataTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        SetProfileMetadataURIWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        metadata
      }
    }
  }
}
    `;
export const useCreateSetProfileMetadataTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateSetProfileMetadataTypedDataMutation,
    TError,
    Types.CreateSetProfileMetadataTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateSetProfileMetadataTypedDataMutation,
    TError,
    Types.CreateSetProfileMetadataTypedDataMutationVariables,
    TContext
  >(
    ["CreateSetProfileMetadataTypedData"],
    (variables?: Types.CreateSetProfileMetadataTypedDataMutationVariables) =>
      fetcher<
        Types.CreateSetProfileMetadataTypedDataMutation,
        Types.CreateSetProfileMetadataTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateSetProfileMetadataTypedDataDocument,
        variables
      )(),
    options
  );
export const CreateSetProfileMetadataViaDispatcherDocument = `
    mutation CreateSetProfileMetadataViaDispatcher($request: CreatePublicSetProfileMetadataURIRequest!) {
  createSetProfileMetadataViaDispatcher(request: $request) {
    ...RelayerResultFields
  }
}
    ${RelayerResultFieldsFragmentDoc}`;
export const useCreateSetProfileMetadataViaDispatcherMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateSetProfileMetadataViaDispatcherMutation,
    TError,
    Types.CreateSetProfileMetadataViaDispatcherMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateSetProfileMetadataViaDispatcherMutation,
    TError,
    Types.CreateSetProfileMetadataViaDispatcherMutationVariables,
    TContext
  >(
    ["CreateSetProfileMetadataViaDispatcher"],
    (
      variables?: Types.CreateSetProfileMetadataViaDispatcherMutationVariables
    ) =>
      fetcher<
        Types.CreateSetProfileMetadataViaDispatcherMutation,
        Types.CreateSetProfileMetadataViaDispatcherMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateSetProfileMetadataViaDispatcherDocument,
        variables
      )(),
    options
  );
export const CreateUnfollowTypedDataDocument = `
    mutation CreateUnfollowTypedData($request: UnfollowRequest!) {
  createUnfollowTypedData(request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        BurnWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        tokenId
      }
    }
  }
}
    `;
export const useCreateUnfollowTypedDataMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.CreateUnfollowTypedDataMutation,
    TError,
    Types.CreateUnfollowTypedDataMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateUnfollowTypedDataMutation,
    TError,
    Types.CreateUnfollowTypedDataMutationVariables,
    TContext
  >(
    ["CreateUnfollowTypedData"],
    (variables?: Types.CreateUnfollowTypedDataMutationVariables) =>
      fetcher<
        Types.CreateUnfollowTypedDataMutation,
        Types.CreateUnfollowTypedDataMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateUnfollowTypedDataDocument,
        variables
      )(),
    options
  );
export const HidePublicationDocument = `
    mutation HidePublication($request: HidePublicationRequest!) {
  hidePublication(request: $request)
}
    `;
export const useHidePublicationMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.HidePublicationMutation,
    TError,
    Types.HidePublicationMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.HidePublicationMutation,
    TError,
    Types.HidePublicationMutationVariables,
    TContext
  >(
    ["HidePublication"],
    (variables?: Types.HidePublicationMutationVariables) =>
      fetcher<
        Types.HidePublicationMutation,
        Types.HidePublicationMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        HidePublicationDocument,
        variables
      )(),
    options
  );
export const ProxyActionDocument = `
    mutation ProxyAction($request: ProxyActionRequest!) {
  proxyAction(request: $request)
}
    `;
export const useProxyActionMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.ProxyActionMutation,
    TError,
    Types.ProxyActionMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.ProxyActionMutation,
    TError,
    Types.ProxyActionMutationVariables,
    TContext
  >(
    ["ProxyAction"],
    (variables?: Types.ProxyActionMutationVariables) =>
      fetcher<Types.ProxyActionMutation, Types.ProxyActionMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        ProxyActionDocument,
        variables
      )(),
    options
  );
export const RemoveReactionDocument = `
    mutation RemoveReaction($request: ReactionRequest!) {
  removeReaction(request: $request)
}
    `;
export const useRemoveReactionMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.RemoveReactionMutation,
    TError,
    Types.RemoveReactionMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.RemoveReactionMutation,
    TError,
    Types.RemoveReactionMutationVariables,
    TContext
  >(
    ["RemoveReaction"],
    (variables?: Types.RemoveReactionMutationVariables) =>
      fetcher<
        Types.RemoveReactionMutation,
        Types.RemoveReactionMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        RemoveReactionDocument,
        variables
      )(),
    options
  );
export const ReportPublicationDocument = `
    mutation ReportPublication($request: ReportPublicationRequest!) {
  reportPublication(request: $request)
}
    `;
export const useReportPublicationMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    Types.ReportPublicationMutation,
    TError,
    Types.ReportPublicationMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.ReportPublicationMutation,
    TError,
    Types.ReportPublicationMutationVariables,
    TContext
  >(
    ["ReportPublication"],
    (variables?: Types.ReportPublicationMutationVariables) =>
      fetcher<
        Types.ReportPublicationMutation,
        Types.ReportPublicationMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        ReportPublicationDocument,
        variables
      )(),
    options
  );
export const ApprovedModuleAllowanceAmountDocument = `
    query ApprovedModuleAllowanceAmount($request: ApprovedModuleAllowanceAmountRequest!) {
  approvedModuleAllowanceAmount(request: $request) {
    currency
    module
    allowance
    contractAddress
  }
  enabledModuleCurrencies {
    name
    symbol
    decimals
    address
  }
}
    `;
export const useApprovedModuleAllowanceAmountQuery = <
  TData = Types.ApprovedModuleAllowanceAmountQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.ApprovedModuleAllowanceAmountQueryVariables,
  options?: UseQueryOptions<
    Types.ApprovedModuleAllowanceAmountQuery,
    TError,
    TData
  >
) =>
  useQuery<Types.ApprovedModuleAllowanceAmountQuery, TError, TData>(
    ["ApprovedModuleAllowanceAmount", variables],
    fetcher<
      Types.ApprovedModuleAllowanceAmountQuery,
      Types.ApprovedModuleAllowanceAmountQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ApprovedModuleAllowanceAmountDocument,
      variables
    ),
    options
  );
export const ChallengeDocument = `
    query Challenge($request: ChallengeRequest!) {
  challenge(request: $request) {
    text
  }
}
    `;
export const useChallengeQuery = <
  TData = Types.ChallengeQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.ChallengeQueryVariables,
  options?: UseQueryOptions<Types.ChallengeQuery, TError, TData>
) =>
  useQuery<Types.ChallengeQuery, TError, TData>(
    ["Challenge", variables],
    fetcher<Types.ChallengeQuery, Types.ChallengeQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ChallengeDocument,
      variables
    ),
    options
  );
export const CollectModuleDocument = `
    query CollectModule($request: PublicationQueryRequest!) {
  publication(request: $request) {
    ... on Post {
      collectNftAddress
      collectModule {
        ...CollectModuleFields
      }
    }
    ... on Comment {
      collectNftAddress
      collectModule {
        ...CollectModuleFields
      }
    }
    ... on Mirror {
      collectNftAddress
      collectModule {
        ...CollectModuleFields
      }
    }
  }
}
    ${CollectModuleFieldsFragmentDoc}`;
export const useCollectModuleQuery = <
  TData = Types.CollectModuleQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.CollectModuleQueryVariables,
  options?: UseQueryOptions<Types.CollectModuleQuery, TError, TData>
) =>
  useQuery<Types.CollectModuleQuery, TError, TData>(
    ["CollectModule", variables],
    fetcher<Types.CollectModuleQuery, Types.CollectModuleQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      CollectModuleDocument,
      variables
    ),
    options
  );
export const CollectorsDocument = `
    query Collectors($request: WhoCollectedPublicationRequest!) {
  whoCollectedPublication(request: $request) {
    items {
      address
      defaultProfile {
        ...ProfileFields
        isFollowedByMe
      }
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useCollectorsQuery = <
  TData = Types.CollectorsQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.CollectorsQueryVariables,
  options?: UseQueryOptions<Types.CollectorsQuery, TError, TData>
) =>
  useQuery<Types.CollectorsQuery, TError, TData>(
    ["Collectors", variables],
    fetcher<Types.CollectorsQuery, Types.CollectorsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      CollectorsDocument,
      variables
    ),
    options
  );
export const CommentFeedDocument = `
    query CommentFeed($request: PublicationsQueryRequest!, $reactionRequest: ReactionFieldResolverRequest, $profileId: ProfileId) {
  publications(request: $request) {
    items {
      ... on Comment {
        ...CommentFields
      }
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${CommentFieldsFragmentDoc}`;
export const useCommentFeedQuery = <
  TData = Types.CommentFeedQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.CommentFeedQueryVariables,
  options?: UseQueryOptions<Types.CommentFeedQuery, TError, TData>
) =>
  useQuery<Types.CommentFeedQuery, TError, TData>(
    ["CommentFeed", variables],
    fetcher<Types.CommentFeedQuery, Types.CommentFeedQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      CommentFeedDocument,
      variables
    ),
    options
  );
export const DefaultProfileDocument = `
    query defaultProfile($request: DefaultProfileRequest!) {
  defaultProfile(request: $request) {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useDefaultProfileQuery = <
  TData = Types.DefaultProfileQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.DefaultProfileQueryVariables,
  options?: UseQueryOptions<Types.DefaultProfileQuery, TError, TData>
) =>
  useQuery<Types.DefaultProfileQuery, TError, TData>(
    ["defaultProfile", variables],
    fetcher<Types.DefaultProfileQuery, Types.DefaultProfileQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      DefaultProfileDocument,
      variables
    ),
    options
  );
export const EnabledCurrencyModulesDocument = `
    query EnabledCurrencyModules {
  enabledModuleCurrencies {
    name
    symbol
    decimals
    address
  }
}
    `;
export const useEnabledCurrencyModulesQuery = <
  TData = Types.EnabledCurrencyModulesQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: Types.EnabledCurrencyModulesQueryVariables,
  options?: UseQueryOptions<Types.EnabledCurrencyModulesQuery, TError, TData>
) =>
  useQuery<Types.EnabledCurrencyModulesQuery, TError, TData>(
    variables === undefined
      ? ["EnabledCurrencyModules"]
      : ["EnabledCurrencyModules", variables],
    fetcher<
      Types.EnabledCurrencyModulesQuery,
      Types.EnabledCurrencyModulesQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      EnabledCurrencyModulesDocument,
      variables
    ),
    options
  );
export const EnabledCurrencyModulesWithProfileDocument = `
    query EnabledCurrencyModulesWithProfile($request: SingleProfileQueryRequest!) {
  enabledModuleCurrencies {
    name
    symbol
    decimals
    address
  }
  profile(request: $request) {
    followModule {
      __typename
    }
  }
}
    `;
export const useEnabledCurrencyModulesWithProfileQuery = <
  TData = Types.EnabledCurrencyModulesWithProfileQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.EnabledCurrencyModulesWithProfileQueryVariables,
  options?: UseQueryOptions<
    Types.EnabledCurrencyModulesWithProfileQuery,
    TError,
    TData
  >
) =>
  useQuery<Types.EnabledCurrencyModulesWithProfileQuery, TError, TData>(
    ["EnabledCurrencyModulesWithProfile", variables],
    fetcher<
      Types.EnabledCurrencyModulesWithProfileQuery,
      Types.EnabledCurrencyModulesWithProfileQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      EnabledCurrencyModulesWithProfileDocument,
      variables
    ),
    options
  );
export const EnabledModulesDocument = `
    query EnabledModules {
  enabledModules {
    collectModules {
      moduleName
      contractAddress
    }
  }
  enabledModuleCurrencies {
    name
    symbol
    decimals
    address
  }
}
    `;
export const useEnabledModulesQuery = <
  TData = Types.EnabledModulesQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: Types.EnabledModulesQueryVariables,
  options?: UseQueryOptions<Types.EnabledModulesQuery, TError, TData>
) =>
  useQuery<Types.EnabledModulesQuery, TError, TData>(
    variables === undefined
      ? ["EnabledModules"]
      : ["EnabledModules", variables],
    fetcher<Types.EnabledModulesQuery, Types.EnabledModulesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      EnabledModulesDocument,
      variables
    ),
    options
  );
export const ExploreFeedDocument = `
    query ExploreFeed($request: ExplorePublicationRequest!, $reactionRequest: ReactionFieldResolverRequest, $profileId: ProfileId) {
  explorePublications(request: $request) {
    items {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;
export const useExploreFeedQuery = <
  TData = Types.ExploreFeedQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.ExploreFeedQueryVariables,
  options?: UseQueryOptions<Types.ExploreFeedQuery, TError, TData>
) =>
  useQuery<Types.ExploreFeedQuery, TError, TData>(
    ["ExploreFeed", variables],
    fetcher<Types.ExploreFeedQuery, Types.ExploreFeedQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ExploreFeedDocument,
      variables
    ),
    options
  );
export const ExploreProfilesDocument = `
    query exploreProfiles($request: ExploreProfilesRequest!) {
  exploreProfiles(request: $request) {
    items {
      ...ProfileFields
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useExploreProfilesQuery = <
  TData = Types.ExploreProfilesQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.ExploreProfilesQueryVariables,
  options?: UseQueryOptions<Types.ExploreProfilesQuery, TError, TData>
) =>
  useQuery<Types.ExploreProfilesQuery, TError, TData>(
    ["exploreProfiles", variables],
    fetcher<Types.ExploreProfilesQuery, Types.ExploreProfilesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ExploreProfilesDocument,
      variables
    ),
    options
  );
export const FeedHighlightsDocument = `
    query FeedHighlights($request: FeedHighlightsRequest!, $reactionRequest: ReactionFieldResolverRequest, $profileId: ProfileId) {
  feedHighlights(request: $request) {
    items {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;
export const useFeedHighlightsQuery = <
  TData = Types.FeedHighlightsQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.FeedHighlightsQueryVariables,
  options?: UseQueryOptions<Types.FeedHighlightsQuery, TError, TData>
) =>
  useQuery<Types.FeedHighlightsQuery, TError, TData>(
    ["FeedHighlights", variables],
    fetcher<Types.FeedHighlightsQuery, Types.FeedHighlightsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      FeedHighlightsDocument,
      variables
    ),
    options
  );
export const FollowersDocument = `
    query Followers($request: FollowersRequest!) {
  followers(request: $request) {
    items {
      wallet {
        address
        defaultProfile {
          ...ProfileFields
          isFollowedByMe
        }
      }
      totalAmountOfTimesFollowed
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useFollowersQuery = <
  TData = Types.FollowersQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.FollowersQueryVariables,
  options?: UseQueryOptions<Types.FollowersQuery, TError, TData>
) =>
  useQuery<Types.FollowersQuery, TError, TData>(
    ["Followers", variables],
    fetcher<Types.FollowersQuery, Types.FollowersQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      FollowersDocument,
      variables
    ),
    options
  );
export const FollowingDocument = `
    query Following($request: FollowingRequest!) {
  following(request: $request) {
    items {
      profile {
        ...ProfileFields
        isFollowedByMe
      }
      totalAmountOfTimesFollowing
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useFollowingQuery = <
  TData = Types.FollowingQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.FollowingQueryVariables,
  options?: UseQueryOptions<Types.FollowingQuery, TError, TData>
) =>
  useQuery<Types.FollowingQuery, TError, TData>(
    ["Following", variables],
    fetcher<Types.FollowingQuery, Types.FollowingQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      FollowingDocument,
      variables
    ),
    options
  );
export const GenerateModuleCurrencyApprovalDataDocument = `
    query GenerateModuleCurrencyApprovalData($request: GenerateModuleCurrencyApprovalDataRequest!) {
  generateModuleCurrencyApprovalData(request: $request) {
    to
    from
    data
  }
}
    `;
export const useGenerateModuleCurrencyApprovalDataQuery = <
  TData = Types.GenerateModuleCurrencyApprovalDataQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.GenerateModuleCurrencyApprovalDataQueryVariables,
  options?: UseQueryOptions<
    Types.GenerateModuleCurrencyApprovalDataQuery,
    TError,
    TData
  >
) =>
  useQuery<Types.GenerateModuleCurrencyApprovalDataQuery, TError, TData>(
    ["GenerateModuleCurrencyApprovalData", variables],
    fetcher<
      Types.GenerateModuleCurrencyApprovalDataQuery,
      Types.GenerateModuleCurrencyApprovalDataQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GenerateModuleCurrencyApprovalDataDocument,
      variables
    ),
    options
  );
export const HasTxHashBeenIndexedDocument = `
    query HasTxHashBeenIndexed($request: HasTxHashBeenIndexedRequest!) {
  hasTxHashBeenIndexed(request: $request) {
    ... on TransactionIndexedResult {
      metadataStatus {
        status
      }
      txHash
      indexed
    }
    ... on TransactionError {
      reason
    }
  }
}
    `;
export const useHasTxHashBeenIndexedQuery = <
  TData = Types.HasTxHashBeenIndexedQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.HasTxHashBeenIndexedQueryVariables,
  options?: UseQueryOptions<Types.HasTxHashBeenIndexedQuery, TError, TData>
) =>
  useQuery<Types.HasTxHashBeenIndexedQuery, TError, TData>(
    ["HasTxHashBeenIndexed", variables],
    fetcher<
      Types.HasTxHashBeenIndexedQuery,
      Types.HasTxHashBeenIndexedQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      HasTxHashBeenIndexedDocument,
      variables
    ),
    options
  );
export const LensterStatsDocument = `
    query LensterStats {
  globalProtocolStats(request: {sources: "Lenster"}) {
    totalProfiles
    totalPosts
    totalBurntProfiles
    totalMirrors
    totalComments
    totalCollects
    totalFollows
  }
}
    `;
export const useLensterStatsQuery = <
  TData = Types.LensterStatsQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: Types.LensterStatsQueryVariables,
  options?: UseQueryOptions<Types.LensterStatsQuery, TError, TData>
) =>
  useQuery<Types.LensterStatsQuery, TError, TData>(
    variables === undefined ? ["LensterStats"] : ["LensterStats", variables],
    fetcher<Types.LensterStatsQuery, Types.LensterStatsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      LensterStatsDocument,
      variables
    ),
    options
  );
export const LikesDocument = `
    query Likes($request: WhoReactedPublicationRequest!) {
  whoReactedPublication(request: $request) {
    items {
      reactionId
      profile {
        ...ProfileFields
        isFollowedByMe
      }
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useLikesQuery = <TData = Types.LikesQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.LikesQueryVariables,
  options?: UseQueryOptions<Types.LikesQuery, TError, TData>
) =>
  useQuery<Types.LikesQuery, TError, TData>(
    ["Likes", variables],
    fetcher<Types.LikesQuery, Types.LikesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      LikesDocument,
      variables
    ),
    options
  );
export const MirrorsDocument = `
    query Mirrors($request: ProfileQueryRequest!) {
  profiles(request: $request) {
    items {
      ...ProfileFields
      isFollowedByMe
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useMirrorsQuery = <TData = Types.MirrorsQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.MirrorsQueryVariables,
  options?: UseQueryOptions<Types.MirrorsQuery, TError, TData>
) =>
  useQuery<Types.MirrorsQuery, TError, TData>(
    ["Mirrors", variables],
    fetcher<Types.MirrorsQuery, Types.MirrorsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      MirrorsDocument,
      variables
    ),
    options
  );
export const MutualFollowersDocument = `
    query MutualFollowers($request: MutualFollowersProfilesQueryRequest!) {
  mutualFollowersProfiles(request: $request) {
    items {
      handle
      name
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
        ... on NftImage {
          uri
        }
      }
    }
    pageInfo {
      totalCount
    }
  }
}
    `;
export const useMutualFollowersQuery = <
  TData = Types.MutualFollowersQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.MutualFollowersQueryVariables,
  options?: UseQueryOptions<Types.MutualFollowersQuery, TError, TData>
) =>
  useQuery<Types.MutualFollowersQuery, TError, TData>(
    ["MutualFollowers", variables],
    fetcher<Types.MutualFollowersQuery, Types.MutualFollowersQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      MutualFollowersDocument,
      variables
    ),
    options
  );
export const MutualFollowersListDocument = `
    query MutualFollowersList($request: MutualFollowersProfilesQueryRequest!) {
  mutualFollowersProfiles(request: $request) {
    items {
      ...ProfileFields
      isFollowedByMe
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useMutualFollowersListQuery = <
  TData = Types.MutualFollowersListQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.MutualFollowersListQueryVariables,
  options?: UseQueryOptions<Types.MutualFollowersListQuery, TError, TData>
) =>
  useQuery<Types.MutualFollowersListQuery, TError, TData>(
    ["MutualFollowersList", variables],
    fetcher<
      Types.MutualFollowersListQuery,
      Types.MutualFollowersListQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      MutualFollowersListDocument,
      variables
    ),
    options
  );
export const NftChallengeDocument = `
    query NFTChallenge($request: NftOwnershipChallengeRequest!) {
  nftOwnershipChallenge(request: $request) {
    id
    text
  }
}
    `;
export const useNftChallengeQuery = <
  TData = Types.NftChallengeQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.NftChallengeQueryVariables,
  options?: UseQueryOptions<Types.NftChallengeQuery, TError, TData>
) =>
  useQuery<Types.NftChallengeQuery, TError, TData>(
    ["NFTChallenge", variables],
    fetcher<Types.NftChallengeQuery, Types.NftChallengeQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      NftChallengeDocument,
      variables
    ),
    options
  );
export const NftFeedDocument = `
    query NFTFeed($request: NFTsRequest!) {
  nfts(request: $request) {
    items {
      name
      collectionName
      contractAddress
      tokenId
      chainId
      originalContent {
        uri
        animatedUrl
      }
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    `;
export const useNftFeedQuery = <TData = Types.NftFeedQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.NftFeedQueryVariables,
  options?: UseQueryOptions<Types.NftFeedQuery, TError, TData>
) =>
  useQuery<Types.NftFeedQuery, TError, TData>(
    ["NFTFeed", variables],
    fetcher<Types.NftFeedQuery, Types.NftFeedQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      NftFeedDocument,
      variables
    ),
    options
  );
export const NotificationCountDocument = `
    query NotificationCount($request: NotificationRequest!) {
  notifications(request: $request) {
    pageInfo {
      totalCount
    }
  }
}
    `;
export const useNotificationCountQuery = <
  TData = Types.NotificationCountQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.NotificationCountQueryVariables,
  options?: UseQueryOptions<Types.NotificationCountQuery, TError, TData>
) =>
  useQuery<Types.NotificationCountQuery, TError, TData>(
    ["NotificationCount", variables],
    fetcher<
      Types.NotificationCountQuery,
      Types.NotificationCountQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      NotificationCountDocument,
      variables
    ),
    options
  );
export const NotificationsDocument = `
    query Notifications($request: NotificationRequest!) {
  notifications(request: $request) {
    items {
      ... on NewFollowerNotification {
        notificationId
        wallet {
          address
          defaultProfile {
            ...ProfileFields
          }
        }
        createdAt
      }
      ... on NewMentionNotification {
        notificationId
        mentionPublication {
          ... on Post {
            id
            profile {
              ...ProfileFields
            }
            metadata {
              content
            }
          }
          ... on Comment {
            id
            profile {
              ...ProfileFields
            }
            metadata {
              content
            }
          }
        }
        createdAt
      }
      ... on NewReactionNotification {
        notificationId
        profile {
          ...ProfileFields
        }
        publication {
          ... on Post {
            id
            metadata {
              content
            }
          }
          ... on Comment {
            id
            metadata {
              content
            }
          }
          ... on Mirror {
            id
            metadata {
              content
            }
          }
        }
        createdAt
      }
      ... on NewCommentNotification {
        notificationId
        profile {
          ...ProfileFields
        }
        comment {
          id
          metadata {
            content
          }
          commentOn {
            ... on Post {
              id
            }
            ... on Comment {
              id
            }
            ... on Mirror {
              id
            }
          }
        }
        createdAt
      }
      ... on NewMirrorNotification {
        notificationId
        profile {
          ...ProfileFields
        }
        publication {
          ... on Post {
            id
            metadata {
              content
            }
          }
          ... on Comment {
            id
            metadata {
              content
            }
          }
        }
        createdAt
      }
      ... on NewCollectNotification {
        notificationId
        wallet {
          address
          defaultProfile {
            ...ProfileFields
          }
        }
        collectedPublication {
          ... on Post {
            id
            metadata {
              content
            }
            collectModule {
              ...CollectModuleFields
            }
          }
          ... on Comment {
            id
            metadata {
              content
            }
            collectModule {
              ...CollectModuleFields
            }
          }
        }
        createdAt
      }
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}`;
export const useNotificationsQuery = <
  TData = Types.NotificationsQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.NotificationsQueryVariables,
  options?: UseQueryOptions<Types.NotificationsQuery, TError, TData>
) =>
  useQuery<Types.NotificationsQuery, TError, TData>(
    ["Notifications", variables],
    fetcher<Types.NotificationsQuery, Types.NotificationsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      NotificationsDocument,
      variables
    ),
    options
  );
export const ProfileDocument = `
    query Profile($request: SingleProfileQueryRequest!, $who: ProfileId) {
  profile(request: $request) {
    id
    handle
    ownedBy
    name
    bio
    metadata
    followNftAddress
    isFollowedByMe
    isFollowing(who: $who)
    attributes {
      key
      value
    }
    dispatcher {
      canUseRelay
    }
    onChainIdentity {
      proofOfHumanity
      sybilDotOrg {
        verified
        source {
          twitter {
            handle
          }
        }
      }
      ens {
        name
      }
      worldcoin {
        isHuman
      }
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
    }
    picture {
      ... on MediaSet {
        original {
          url
        }
      }
      ... on NftImage {
        uri
      }
    }
    coverPicture {
      ... on MediaSet {
        original {
          url
        }
      }
    }
    followModule {
      __typename
    }
  }
}
    `;
export const useProfileQuery = <TData = Types.ProfileQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.ProfileQueryVariables,
  options?: UseQueryOptions<Types.ProfileQuery, TError, TData>
) =>
  useQuery<Types.ProfileQuery, TError, TData>(
    ["Profile", variables],
    fetcher<Types.ProfileQuery, Types.ProfileQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ProfileDocument,
      variables
    ),
    options
  );
export const ProfileAddressDocument = `
    query ProfileAddress($request: SingleProfileQueryRequest!) {
  profile(request: $request) {
    id
    ownedBy
  }
}
    `;
export const useProfileAddressQuery = <
  TData = Types.ProfileAddressQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.ProfileAddressQueryVariables,
  options?: UseQueryOptions<Types.ProfileAddressQuery, TError, TData>
) =>
  useQuery<Types.ProfileAddressQuery, TError, TData>(
    ["ProfileAddress", variables],
    fetcher<Types.ProfileAddressQuery, Types.ProfileAddressQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ProfileAddressDocument,
      variables
    ),
    options
  );
export const ProfileFeedDocument = `
    query ProfileFeed($request: PublicationsQueryRequest!, $reactionRequest: ReactionFieldResolverRequest, $profileId: ProfileId) {
  publications(request: $request) {
    items {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;
export const useProfileFeedQuery = <
  TData = Types.ProfileFeedQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.ProfileFeedQueryVariables,
  options?: UseQueryOptions<Types.ProfileFeedQuery, TError, TData>
) =>
  useQuery<Types.ProfileFeedQuery, TError, TData>(
    ["ProfileFeed", variables],
    fetcher<Types.ProfileFeedQuery, Types.ProfileFeedQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ProfileFeedDocument,
      variables
    ),
    options
  );
export const ProfileSettingsDocument = `
    query ProfileSettings($request: SingleProfileQueryRequest!) {
  profile(request: $request) {
    id
    name
    bio
    attributes {
      key
      value
    }
    coverPicture {
      ... on MediaSet {
        original {
          url
        }
      }
    }
    picture {
      ... on MediaSet {
        original {
          url
        }
      }
      ... on NftImage {
        uri
        tokenId
        contractAddress
      }
    }
  }
}
    `;
export const useProfileSettingsQuery = <
  TData = Types.ProfileSettingsQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.ProfileSettingsQueryVariables,
  options?: UseQueryOptions<Types.ProfileSettingsQuery, TError, TData>
) =>
  useQuery<Types.ProfileSettingsQuery, TError, TData>(
    ["ProfileSettings", variables],
    fetcher<Types.ProfileSettingsQuery, Types.ProfileSettingsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ProfileSettingsDocument,
      variables
    ),
    options
  );
export const ProfilesDocument = `
    query Profiles($request: ProfileQueryRequest!) {
  profiles(request: $request) {
    items {
      ...ProfileFields
      isDefault
      isFollowedByMe
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useProfilesQuery = <TData = Types.ProfilesQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.ProfilesQueryVariables,
  options?: UseQueryOptions<Types.ProfilesQuery, TError, TData>
) =>
  useQuery<Types.ProfilesQuery, TError, TData>(
    ["Profiles", variables],
    fetcher<Types.ProfilesQuery, Types.ProfilesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ProfilesDocument,
      variables
    ),
    options
  );
export const PublicationDocument = `
    query Publication($request: PublicationQueryRequest!, $reactionRequest: ReactionFieldResolverRequest, $profileId: ProfileId) {
  publication(request: $request) {
    ... on Post {
      ...PostFields
      onChainContentURI
      collectNftAddress
      profile {
        isFollowedByMe
      }
      referenceModule {
        __typename
      }
    }
    ... on Comment {
      ...CommentFields
      onChainContentURI
      collectNftAddress
      profile {
        isFollowedByMe
      }
      referenceModule {
        __typename
      }
    }
    ... on Mirror {
      ...MirrorFields
      onChainContentURI
      collectNftAddress
      profile {
        isFollowedByMe
      }
      referenceModule {
        __typename
      }
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;
export const usePublicationQuery = <
  TData = Types.PublicationQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.PublicationQueryVariables,
  options?: UseQueryOptions<Types.PublicationQuery, TError, TData>
) =>
  useQuery<Types.PublicationQuery, TError, TData>(
    ["Publication", variables],
    fetcher<Types.PublicationQuery, Types.PublicationQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      PublicationDocument,
      variables
    ),
    options
  );
export const PublicationRevenueDocument = `
    query PublicationRevenue($request: PublicationRevenueQueryRequest!) {
  publicationRevenue(request: $request) {
    revenue {
      total {
        value
      }
    }
  }
}
    `;
export const usePublicationRevenueQuery = <
  TData = Types.PublicationRevenueQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.PublicationRevenueQueryVariables,
  options?: UseQueryOptions<Types.PublicationRevenueQuery, TError, TData>
) =>
  useQuery<Types.PublicationRevenueQuery, TError, TData>(
    ["PublicationRevenue", variables],
    fetcher<
      Types.PublicationRevenueQuery,
      Types.PublicationRevenueQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      PublicationRevenueDocument,
      variables
    ),
    options
  );
export const RecommendedProfilesDocument = `
    query RecommendedProfiles($options: RecommendedProfileOptions) {
  recommendedProfiles(options: $options) {
    ...ProfileFields
    isFollowedByMe
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useRecommendedProfilesQuery = <
  TData = Types.RecommendedProfilesQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: Types.RecommendedProfilesQueryVariables,
  options?: UseQueryOptions<Types.RecommendedProfilesQuery, TError, TData>
) =>
  useQuery<Types.RecommendedProfilesQuery, TError, TData>(
    variables === undefined
      ? ["RecommendedProfiles"]
      : ["RecommendedProfiles", variables],
    fetcher<
      Types.RecommendedProfilesQuery,
      Types.RecommendedProfilesQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      RecommendedProfilesDocument,
      variables
    ),
    options
  );
export const RelevantPeopleDocument = `
    query RelevantPeople($request: ProfileQueryRequest!) {
  profiles(request: $request) {
    items {
      ...ProfileFields
      isFollowedByMe
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useRelevantPeopleQuery = <
  TData = Types.RelevantPeopleQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.RelevantPeopleQueryVariables,
  options?: UseQueryOptions<Types.RelevantPeopleQuery, TError, TData>
) =>
  useQuery<Types.RelevantPeopleQuery, TError, TData>(
    ["RelevantPeople", variables],
    fetcher<Types.RelevantPeopleQuery, Types.RelevantPeopleQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      RelevantPeopleDocument,
      variables
    ),
    options
  );
export const SearchProfilesDocument = `
    query SearchProfiles($request: SearchQueryRequest!) {
  search(request: $request) {
    ... on ProfileSearchResult {
      items {
        ...ProfileFields
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useSearchProfilesQuery = <
  TData = Types.SearchProfilesQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.SearchProfilesQueryVariables,
  options?: UseQueryOptions<Types.SearchProfilesQuery, TError, TData>
) =>
  useQuery<Types.SearchProfilesQuery, TError, TData>(
    ["SearchProfiles", variables],
    fetcher<Types.SearchProfilesQuery, Types.SearchProfilesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      SearchProfilesDocument,
      variables
    ),
    options
  );
export const SearchPublicationsDocument = `
    query SearchPublications($request: SearchQueryRequest!, $reactionRequest: ReactionFieldResolverRequest, $profileId: ProfileId) {
  search(request: $request) {
    ... on PublicationSearchResult {
      items {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}`;
export const useSearchPublicationsQuery = <
  TData = Types.SearchPublicationsQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.SearchPublicationsQueryVariables,
  options?: UseQueryOptions<Types.SearchPublicationsQuery, TError, TData>
) =>
  useQuery<Types.SearchPublicationsQuery, TError, TData>(
    ["SearchPublications", variables],
    fetcher<
      Types.SearchPublicationsQuery,
      Types.SearchPublicationsQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      SearchPublicationsDocument,
      variables
    ),
    options
  );
export const SuperFollowDocument = `
    query SuperFollow($request: SingleProfileQueryRequest!) {
  profile(request: $request) {
    id
    followModule {
      ... on FeeFollowModuleSettings {
        amount {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
        recipient
      }
    }
  }
}
    `;
export const useSuperFollowQuery = <
  TData = Types.SuperFollowQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.SuperFollowQueryVariables,
  options?: UseQueryOptions<Types.SuperFollowQuery, TError, TData>
) =>
  useQuery<Types.SuperFollowQuery, TError, TData>(
    ["SuperFollow", variables],
    fetcher<Types.SuperFollowQuery, Types.SuperFollowQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      SuperFollowDocument,
      variables
    ),
    options
  );
export const TimelineDocument = `
    query Timeline($request: FeedRequest!, $reactionRequest: ReactionFieldResolverRequest, $profileId: ProfileId) {
  feed(request: $request) {
    items {
      root {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
      }
      electedMirror {
        mirrorId
        profile {
          ...ProfileFields
        }
        timestamp
      }
      mirrors {
        profile {
          ...ProfileFields
        }
        timestamp
      }
      collects {
        profile {
          ...ProfileFields
        }
        timestamp
      }
      reactions {
        profile {
          ...ProfileFields
        }
        reaction
        timestamp
      }
      comments {
        ...CommentFields
      }
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}`;
export const useTimelineQuery = <TData = Types.TimelineQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.TimelineQueryVariables,
  options?: UseQueryOptions<Types.TimelineQuery, TError, TData>
) =>
  useQuery<Types.TimelineQuery, TError, TData>(
    ["Timeline", variables],
    fetcher<Types.TimelineQuery, Types.TimelineQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      TimelineDocument,
      variables
    ),
    options
  );
export const TrendingDocument = `
    query Trending($request: AllPublicationsTagsRequest!) {
  allPublicationsTags(request: $request) {
    items {
      tag
      total
    }
  }
}
    `;
export const useTrendingQuery = <TData = Types.TrendingQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: Types.TrendingQueryVariables,
  options?: UseQueryOptions<Types.TrendingQuery, TError, TData>
) =>
  useQuery<Types.TrendingQuery, TError, TData>(
    ["Trending", variables],
    fetcher<Types.TrendingQuery, Types.TrendingQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      TrendingDocument,
      variables
    ),
    options
  );
export const UserProfilesDocument = `
    query UserProfiles($ownedBy: [EthereumAddress!]) {
  profiles(request: {ownedBy: $ownedBy}) {
    items {
      ...ProfileFields
      stats {
        totalFollowing
      }
      isDefault
      dispatcher {
        canUseRelay
      }
    }
  }
  userSigNonces {
    lensHubOnChainSigNonce
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useUserProfilesQuery = <
  TData = Types.UserProfilesQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: Types.UserProfilesQueryVariables,
  options?: UseQueryOptions<Types.UserProfilesQuery, TError, TData>
) =>
  useQuery<Types.UserProfilesQuery, TError, TData>(
    variables === undefined ? ["UserProfiles"] : ["UserProfiles", variables],
    fetcher<Types.UserProfilesQuery, Types.UserProfilesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      UserProfilesDocument,
      variables
    ),
    options
  );
