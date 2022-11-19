/* eslint-disable */
import * as Types from "./graphql";

import { ethers } from "ethers";
import { z } from "zod";
import {
  AccessConditionInput,
  AccessConditionOutput,
  AchRequest,
  AddProfileInterestsRequest,
  AllPublicationsTagsRequest,
  AndConditionInput,
  AndConditionOutput,
  ApprovedAllowanceAmount,
  ApprovedModuleAllowanceAmountRequest,
  Attribute,
  AuthChallengeResult,
  AuthenticationResult,
  BroadcastRequest,
  BurnProfileRequest,
  CanCommentResponse,
  CanDecryptResponse,
  CanMirrorResponse,
  ChallengeRequest,
  ClaimHandleRequest,
  ClaimStatus,
  ClaimableHandles,
  CollectConditionInput,
  CollectConditionOutput,
  CollectModuleParams,
  CollectModules,
  CollectProxyAction,
  CollectedEvent,
  Comment,
  ContractType,
  CreateBurnEip712TypedData,
  CreateBurnEip712TypedDataTypes,
  CreateBurnEip712TypedDataValue,
  CreateBurnProfileBroadcastItemResult,
  CreateCollectBroadcastItemResult,
  CreateCollectEip712TypedData,
  CreateCollectEip712TypedDataTypes,
  CreateCollectEip712TypedDataValue,
  CreateCollectRequest,
  CreateCommentBroadcastItemResult,
  CreateCommentEip712TypedData,
  CreateCommentEip712TypedDataTypes,
  CreateCommentEip712TypedDataValue,
  CreateFollowBroadcastItemResult,
  CreateFollowEip712TypedData,
  CreateFollowEip712TypedDataTypes,
  CreateFollowEip712TypedDataValue,
  CreateMirrorBroadcastItemResult,
  CreateMirrorEip712TypedData,
  CreateMirrorEip712TypedDataTypes,
  CreateMirrorEip712TypedDataValue,
  CreateMirrorRequest,
  CreatePostBroadcastItemResult,
  CreatePostEip712TypedData,
  CreatePostEip712TypedDataTypes,
  CreatePostEip712TypedDataValue,
  CreateProfileRequest,
  CreatePublicCommentRequest,
  CreatePublicPostRequest,
  CreatePublicSetProfileMetadataUriRequest,
  CreateSetDefaultProfileRequest,
  CreateSetDispatcherBroadcastItemResult,
  CreateSetDispatcherEip712TypedData,
  CreateSetDispatcherEip712TypedDataTypes,
  CreateSetDispatcherEip712TypedDataValue,
  CreateSetFollowModuleBroadcastItemResult,
  CreateSetFollowModuleEip712TypedData,
  CreateSetFollowModuleEip712TypedDataTypes,
  CreateSetFollowModuleEip712TypedDataValue,
  CreateSetFollowModuleRequest,
  CreateSetFollowNftUriBroadcastItemResult,
  CreateSetFollowNftUriEip712TypedData,
  CreateSetFollowNftUriEip712TypedDataTypes,
  CreateSetFollowNftUriEip712TypedDataValue,
  CreateSetFollowNftUriRequest,
  CreateSetProfileImageUriBroadcastItemResult,
  CreateSetProfileImageUriEip712TypedData,
  CreateSetProfileImageUriEip712TypedDataTypes,
  CreateSetProfileImageUriEip712TypedDataValue,
  CreateSetProfileMetadataUriBroadcastItemResult,
  CreateSetProfileMetadataUrieip712TypedData,
  CreateSetProfileMetadataUrieip712TypedDataTypes,
  CreateSetProfileMetadataUrieip712TypedDataValue,
  CreateToggleFollowBroadcastItemResult,
  CreateToggleFollowEip712TypedData,
  CreateToggleFollowEip712TypedDataTypes,
  CreateToggleFollowEip712TypedDataValue,
  CreateToggleFollowRequest,
  CreateUnfollowBroadcastItemResult,
  CustomFiltersTypes,
  DecryptFailReason,
  DefaultProfileRequest,
  DegreesOfSeparationReferenceModuleParams,
  DegreesOfSeparationReferenceModuleSettings,
  Dispatcher,
  DoesFollow,
  DoesFollowRequest,
  DoesFollowResponse,
  Eip712TypedDataDomain,
  Eip712TypedDataField,
  ElectedMirror,
  EnabledModule,
  EnabledModules,
  EncryptedFieldsOutput,
  EncryptedMedia,
  EncryptedMediaSet,
  EncryptionParamsOutput,
  EncryptionProvider,
  EnsOnChainIdentity,
  EoaOwnershipInput,
  EoaOwnershipOutput,
  Erc20,
  Erc20Amount,
  Erc20OwnershipInput,
  Erc20OwnershipOutput,
  ExploreProfileResult,
  ExploreProfilesRequest,
  ExplorePublicationRequest,
  ExplorePublicationResult,
  FeeCollectModuleParams,
  FeeCollectModuleSettings,
  FeeFollowModuleParams,
  FeeFollowModuleRedeemParams,
  FeeFollowModuleSettings,
  FeedEventItemType,
  FeedHighlightsRequest,
  FeedItem,
  FeedRequest,
  Follow,
  FollowConditionInput,
  FollowConditionOutput,
  FollowModuleParams,
  FollowModuleRedeemParams,
  FollowModules,
  FollowOnlyReferenceModuleSettings,
  FollowProxyAction,
  FollowRequest,
  FollowRevenueResult,
  Follower,
  FollowerNftOwnedTokenIds,
  FollowerNftOwnedTokenIdsRequest,
  FollowersRequest,
  Following,
  FollowingRequest,
  FraudReasonInputParams,
  FreeCollectModuleParams,
  FreeCollectModuleSettings,
  FreeCollectProxyAction,
  FreeFollowProxyAction,
  GatedPublicationParamsInput,
  GenerateModuleCurrencyApproval,
  GenerateModuleCurrencyApprovalDataRequest,
  GetPublicationMetadataStatusRequest,
  GlobalProtocolStats,
  GlobalProtocolStatsRequest,
  HasTxHashBeenIndexedRequest,
  HidePublicationRequest,
  IllegalReasonInputParams,
  InternalPublicationsFilterRequest,
  LimitedFeeCollectModuleParams,
  LimitedFeeCollectModuleSettings,
  LimitedTimedFeeCollectModuleParams,
  LimitedTimedFeeCollectModuleSettings,
  Log,
  Media,
  MediaOutput,
  MediaSet,
  MetadataAttributeInput,
  MetadataAttributeOutput,
  MetadataOutput,
  Mirror,
  MirrorEvent,
  ModuleFeeAmount,
  ModuleFeeAmountParams,
  ModuleInfo,
  MutualFollowersProfilesQueryRequest,
  Nft,
  NftContent,
  NftData,
  NfTsRequest,
  NfTsResult,
  NewCollectNotification,
  NewCommentNotification,
  NewFollowerNotification,
  NewMentionNotification,
  NewMirrorNotification,
  NewReactionNotification,
  NftImage,
  NftOwnershipChallenge,
  NftOwnershipChallengeRequest,
  NftOwnershipChallengeResult,
  NftOwnershipInput,
  NftOwnershipOutput,
  NotificationRequest,
  NotificationTypes,
  OnChainIdentity,
  OrConditionInput,
  OrConditionOutput,
  Owner,
  PaginatedAllPublicationsTagsResult,
  PaginatedFeedResult,
  PaginatedFollowersResult,
  PaginatedFollowingResult,
  PaginatedNotificationResult,
  PaginatedProfilePublicationsForSaleResult,
  PaginatedProfileResult,
  PaginatedPublicationResult,
  PaginatedResultInfo,
  PaginatedTimelineResult,
  PaginatedWhoCollectedResult,
  PaginatedWhoReactedResult,
  PendingApprovalFollowsRequest,
  PendingApproveFollowsResult,
  Post,
  Profile,
  ProfileFollowModuleBeenRedeemedRequest,
  ProfileFollowModuleRedeemParams,
  ProfileFollowModuleSettings,
  ProfileFollowRevenueQueryRequest,
  ProfileOnChainIdentityRequest,
  ProfileOwnershipInput,
  ProfileOwnershipOutput,
  ProfilePublicationRevenueQueryRequest,
  ProfilePublicationRevenueResult,
  ProfilePublicationsForSaleRequest,
  ProfileQueryRequest,
  ProfileSearchResult,
  ProfileSortCriteria,
  ProfileStats,
  ProviderSpecificParamsOutput,
  ProxyActionError,
  ProxyActionQueued,
  ProxyActionRequest,
  ProxyActionStatusResult,
  ProxyActionStatusTypes,
  PublicMediaRequest,
  PublicMediaResults,
  PublicationContentWarning,
  PublicationMainFocus,
  PublicationMediaSource,
  PublicationMetadataContentWarningFilter,
  PublicationMetadataDisplayTypes,
  PublicationMetadataFilters,
  PublicationMetadataMediaInput,
  PublicationMetadataStatus,
  PublicationMetadataStatusType,
  PublicationMetadataTagsFilter,
  PublicationMetadataV1Input,
  PublicationMetadataV2Input,
  PublicationQueryRequest,
  PublicationReportingFraudSubreason,
  PublicationReportingIllegalSubreason,
  PublicationReportingReason,
  PublicationReportingSensitiveSubreason,
  PublicationReportingSpamSubreason,
  PublicationRevenue,
  PublicationRevenueQueryRequest,
  PublicationSearchResult,
  PublicationSignatureContextInput,
  PublicationSortCriteria,
  PublicationStats,
  PublicationTypes,
  PublicationValidateMetadataResult,
  PublicationsQueryRequest,
  ReactionEvent,
  ReactionFieldResolverRequest,
  ReactionRequest,
  ReactionTypes,
  RecommendedProfileOptions,
  ReferenceModuleParams,
  ReferenceModules,
  RefreshRequest,
  RelRequest,
  RelayError,
  RelayErrorReasons,
  RelayerResult,
  RemoveProfileInterestsRequest,
  ReportPublicationRequest,
  ReportingReasonInputParams,
  ReservedClaimableHandle,
  RevenueAggregate,
  RevertCollectModuleSettings,
  RevertFollowModuleSettings,
  ScalarOperator,
  SearchQueryRequest,
  SearchRequestTypes,
  SensitiveReasonInputParams,
  SetDefaultProfileBroadcastItemResult,
  SetDefaultProfileEip712TypedData,
  SetDefaultProfileEip712TypedDataTypes,
  SetDefaultProfileEip712TypedDataValue,
  SetDispatcherRequest,
  SignedAuthChallenge,
  SingleProfileQueryRequest,
  SpamReasonInputParams,
  SybilDotOrgIdentity,
  SybilDotOrgIdentitySource,
  SybilDotOrgTwitterIdentity,
  TagResult,
  TagSortCriteria,
  TimedFeeCollectModuleParams,
  TimedFeeCollectModuleSettings,
  TimelineRequest,
  TimelineType,
  TransactionError,
  TransactionErrorReasons,
  TransactionIndexedResult,
  TransactionReceipt,
  TypedDataOptions,
  UnfollowRequest,
  UnknownCollectModuleParams,
  UnknownCollectModuleSettings,
  UnknownFollowModuleParams,
  UnknownFollowModuleRedeemParams,
  UnknownFollowModuleSettings,
  UnknownReferenceModuleParams,
  UnknownReferenceModuleSettings,
  UpdateProfileImageRequest,
  UserSigNonces,
  ValidatePublicationMetadataRequest,
  VerifyRequest,
  Wallet,
  WhoCollectedPublicationRequest,
  WhoReactedPublicationRequest,
  WhoReactedResult,
  WorldcoinIdentity,
} from "./graphql";

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny =>
  v !== undefined && v !== null;

export const definedNonNullAnySchema = z
  .any()
  .refine((v) => isDefinedNonNullAny(v));

export function AccessConditionInputSchema(): z.ZodObject<
  Properties<AccessConditionInput>
> {
  return z.object({
    and: z.lazy(() => definedNonNullAnySchema.nullish()),
    collect: z.lazy(() => definedNonNullAnySchema.nullish()),
    eoa: z.lazy(() => definedNonNullAnySchema.nullish()),
    follow: z.lazy(() => definedNonNullAnySchema.nullish()),
    nft: z.lazy(() => definedNonNullAnySchema.nullish()),
    or: z.lazy(() => definedNonNullAnySchema.nullish()),
    profile: z.lazy(() => definedNonNullAnySchema.nullish()),
    token: z.lazy(() => definedNonNullAnySchema.nullish()),
  });
}

export function AccessConditionOutputSchema(): z.ZodObject<
  Properties<AccessConditionOutput>
> {
  return z.object({
    __typename: z.literal("AccessConditionOutput").optional(),
    and: definedNonNullAnySchema.nullish(),
    collect: definedNonNullAnySchema.nullish(),
    eoa: definedNonNullAnySchema.nullish(),
    follow: definedNonNullAnySchema.nullish(),
    nft: definedNonNullAnySchema.nullish(),
    or: definedNonNullAnySchema.nullish(),
    profile: definedNonNullAnySchema.nullish(),
    token: definedNonNullAnySchema.nullish(),
  });
}

export function AchRequestSchema(): z.ZodObject<Properties<AchRequest>> {
  return z.object({
    ethereumAddress: string,
    freeTextHandle: z.boolean().nullish(),
    handle: definedNonNullAnySchema.nullish(),
    overrideAlreadyClaimed: z.boolean(),
    overrideTradeMark: z.boolean(),
    secret: z.string(),
  });
}

export function AddProfileInterestsRequestSchema(): z.ZodObject<
  Properties<AddProfileInterestsRequest>
> {
  return z.object({
    interests: z.array(definedNonNullAnySchema),
    profileId: string,
  });
}

export function AllPublicationsTagsRequestSchema(): z.ZodObject<
  Properties<AllPublicationsTagsRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
    sort: definedNonNullAnySchema,
    source: string.nullish(),
  });
}

export function AndConditionInputSchema(): z.ZodObject<
  Properties<AndConditionInput>
> {
  return z.object({
    criteria: z.array(z.lazy(() => definedNonNullAnySchema)),
  });
}

export function AndConditionOutputSchema(): z.ZodObject<
  Properties<AndConditionOutput>
> {
  return z.object({
    __typename: z.literal("AndConditionOutput").optional(),
    criteria: z.array(definedNonNullAnySchema),
  });
}

export function ApprovedAllowanceAmountSchema(): z.ZodObject<
  Properties<ApprovedAllowanceAmount>
> {
  return z.object({
    __typename: z.literal("ApprovedAllowanceAmount").optional(),
    allowance: z.string(),
    contractAddress: string,
    currency: string,
    module: z.string(),
  });
}

export function ApprovedModuleAllowanceAmountRequestSchema(): z.ZodObject<
  Properties<ApprovedModuleAllowanceAmountRequest>
> {
  return z.object({
    collectModules: z.array(definedNonNullAnySchema).nullish(),
    currencies: z.array(string),
    followModules: z.array(definedNonNullAnySchema).nullish(),
    referenceModules: z.array(definedNonNullAnySchema).nullish(),
    unknownCollectModules: z.array(string).nullish(),
    unknownFollowModules: z.array(string).nullish(),
    unknownReferenceModules: z.array(string).nullish(),
  });
}

export function AttributeSchema(): z.ZodObject<Properties<Attribute>> {
  return z.object({
    __typename: z.literal("Attribute").optional(),
    displayType: z.string().nullish(),
    key: z.string(),
    traitType: z.string().nullish(),
    value: z.string(),
  });
}

export function AuthChallengeResultSchema(): z.ZodObject<
  Properties<AuthChallengeResult>
> {
  return z.object({
    __typename: z.literal("AuthChallengeResult").optional(),
    text: z.string(),
  });
}

export function AuthenticationResultSchema(): z.ZodObject<
  Properties<AuthenticationResult>
> {
  return z.object({
    __typename: z.literal("AuthenticationResult").optional(),
    accessToken: string,
    refreshToken: string,
  });
}

export function BroadcastRequestSchema(): z.ZodObject<
  Properties<BroadcastRequest>
> {
  return z.object({
    id: string,
    signature: string,
  });
}

export function BurnProfileRequestSchema(): z.ZodObject<
  Properties<BurnProfileRequest>
> {
  return z.object({
    profileId: string,
  });
}

export function CanCommentResponseSchema(): z.ZodObject<
  Properties<CanCommentResponse>
> {
  return z.object({
    __typename: z.literal("CanCommentResponse").optional(),
    result: z.boolean(),
  });
}

export function CanDecryptResponseSchema(): z.ZodObject<
  Properties<CanDecryptResponse>
> {
  return z.object({
    __typename: z.literal("CanDecryptResponse").optional(),
    reasons: definedNonNullAnySchema.nullish(),
    result: z.boolean(),
  });
}

export function CanMirrorResponseSchema(): z.ZodObject<
  Properties<CanMirrorResponse>
> {
  return z.object({
    __typename: z.literal("CanMirrorResponse").optional(),
    result: z.boolean(),
  });
}

export function ChallengeRequestSchema(): z.ZodObject<
  Properties<ChallengeRequest>
> {
  return z.object({
    address: string,
  });
}

export function ClaimHandleRequestSchema(): z.ZodObject<
  Properties<ClaimHandleRequest>
> {
  return z.object({
    followModule: definedNonNullAnySchema.nullish(),
    freeTextHandle: definedNonNullAnySchema.nullish(),
    id: definedNonNullAnySchema.nullish(),
  });
}

export const ClaimStatusSchema = z.nativeEnum(ClaimStatus);

export function ClaimableHandlesSchema(): z.ZodObject<
  Properties<ClaimableHandles>
> {
  return z.object({
    __typename: z.literal("ClaimableHandles").optional(),
    canClaimFreeTextHandle: z.boolean(),
    reservedHandles: z.array(definedNonNullAnySchema),
  });
}

export function CollectConditionInputSchema(): z.ZodObject<
  Properties<CollectConditionInput>
> {
  return z.object({
    publicationId: string,
    publisherId: string,
  });
}

export function CollectConditionOutputSchema(): z.ZodObject<
  Properties<CollectConditionOutput>
> {
  return z.object({
    __typename: z.literal("CollectConditionOutput").optional(),
    publicationId: string,
    publisherId: string,
  });
}

export function CollectModuleParamsSchema(): z.ZodObject<
  Properties<CollectModuleParams>
> {
  return z.object({
    feeCollectModule: definedNonNullAnySchema.nullish(),
    freeCollectModule: definedNonNullAnySchema.nullish(),
    limitedFeeCollectModule: definedNonNullAnySchema.nullish(),
    limitedTimedFeeCollectModule: definedNonNullAnySchema.nullish(),
    revertCollectModule: z.boolean().nullish(),
    timedFeeCollectModule: definedNonNullAnySchema.nullish(),
    unknownCollectModule: definedNonNullAnySchema.nullish(),
  });
}

export const CollectModulesSchema = z.nativeEnum(CollectModules);

export function CollectProxyActionSchema(): z.ZodObject<
  Properties<CollectProxyAction>
> {
  return z.object({
    freeCollect: definedNonNullAnySchema.nullish(),
  });
}

export function CollectedEventSchema(): z.ZodObject<
  Properties<CollectedEvent>
> {
  return z.object({
    __typename: z.literal("CollectedEvent").optional(),
    profile: definedNonNullAnySchema,
    timestamp: Date,
  });
}

export function CommentSchema(): z.ZodObject<Properties<Comment>> {
  return z.object({
    __typename: z.literal("Comment").optional(),
    appId: string.nullish(),
    canComment: definedNonNullAnySchema,
    canDecrypt: definedNonNullAnySchema,
    canMirror: definedNonNullAnySchema,
    collectModule: definedNonNullAnySchema,
    collectNftAddress: string.nullish(),
    collectedBy: definedNonNullAnySchema.nullish(),
    commentOn: definedNonNullAnySchema.nullish(),
    createdAt: Date,
    firstComment: definedNonNullAnySchema.nullish(),
    hasCollectedByMe: z.boolean(),
    hidden: z.boolean(),
    id: string,
    isGated: z.boolean(),
    mainPost: definedNonNullAnySchema,
    metadata: definedNonNullAnySchema,
    mirrors: z.array(string),
    onChainContentURI: z.string(),
    profile: definedNonNullAnySchema,
    reaction: definedNonNullAnySchema.nullish(),
    referenceModule: definedNonNullAnySchema.nullish(),
    stats: definedNonNullAnySchema,
  });
}

export const ContractTypeSchema = z.nativeEnum(ContractType);

export function CreateBurnEip712TypedDataSchema(): z.ZodObject<
  Properties<CreateBurnEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreateBurnEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateBurnEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateBurnEip712TypedDataTypes>
> {
  return z.object({
    __typename: z.literal("CreateBurnEIP712TypedDataTypes").optional(),
    BurnWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateBurnEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateBurnEip712TypedDataValue>
> {
  return z.object({
    __typename: z.literal("CreateBurnEIP712TypedDataValue").optional(),
    deadline: number,
    nonce: number,
    tokenId: z.string(),
  });
}

export function CreateBurnProfileBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateBurnProfileBroadcastItemResult>
> {
  return z.object({
    __typename: z.literal("CreateBurnProfileBroadcastItemResult").optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateCollectBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateCollectBroadcastItemResult>
> {
  return z.object({
    __typename: z.literal("CreateCollectBroadcastItemResult").optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateCollectEip712TypedDataSchema(): z.ZodObject<
  Properties<CreateCollectEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreateCollectEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateCollectEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateCollectEip712TypedDataTypes>
> {
  return z.object({
    __typename: z.literal("CreateCollectEIP712TypedDataTypes").optional(),
    CollectWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateCollectEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateCollectEip712TypedDataValue>
> {
  return z.object({
    __typename: z.literal("CreateCollectEIP712TypedDataValue").optional(),
    data: ethers.Bytes,
    deadline: number,
    nonce: number,
    profileId: string,
    pubId: string,
  });
}

export function CreateCollectRequestSchema(): z.ZodObject<
  Properties<CreateCollectRequest>
> {
  return z.object({
    publicationId: string,
    unknownModuleData: ethers.Bytes.nullish(),
  });
}

export function CreateCommentBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateCommentBroadcastItemResult>
> {
  return z.object({
    __typename: z.literal("CreateCommentBroadcastItemResult").optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateCommentEip712TypedDataSchema(): z.ZodObject<
  Properties<CreateCommentEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreateCommentEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateCommentEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateCommentEip712TypedDataTypes>
> {
  return z.object({
    __typename: z.literal("CreateCommentEIP712TypedDataTypes").optional(),
    CommentWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateCommentEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateCommentEip712TypedDataValue>
> {
  return z.object({
    __typename: z.literal("CreateCommentEIP712TypedDataValue").optional(),
    collectModule: string,
    collectModuleInitData: ethers.Bytes,
    contentURI: string,
    deadline: number,
    nonce: number,
    profileId: string,
    profileIdPointed: string,
    pubIdPointed: string,
    referenceModule: string,
    referenceModuleData: ethers.Bytes,
    referenceModuleInitData: ethers.Bytes,
  });
}

export function CreateFollowBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateFollowBroadcastItemResult>
> {
  return z.object({
    __typename: z.literal("CreateFollowBroadcastItemResult").optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateFollowEip712TypedDataSchema(): z.ZodObject<
  Properties<CreateFollowEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreateFollowEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateFollowEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateFollowEip712TypedDataTypes>
> {
  return z.object({
    __typename: z.literal("CreateFollowEIP712TypedDataTypes").optional(),
    FollowWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateFollowEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateFollowEip712TypedDataValue>
> {
  return z.object({
    __typename: z.literal("CreateFollowEIP712TypedDataValue").optional(),
    datas: z.array(ethers.Bytes),
    deadline: number,
    nonce: number,
    profileIds: z.array(string),
  });
}

export function CreateMirrorBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateMirrorBroadcastItemResult>
> {
  return z.object({
    __typename: z.literal("CreateMirrorBroadcastItemResult").optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateMirrorEip712TypedDataSchema(): z.ZodObject<
  Properties<CreateMirrorEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreateMirrorEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateMirrorEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateMirrorEip712TypedDataTypes>
> {
  return z.object({
    __typename: z.literal("CreateMirrorEIP712TypedDataTypes").optional(),
    MirrorWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateMirrorEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateMirrorEip712TypedDataValue>
> {
  return z.object({
    __typename: z.literal("CreateMirrorEIP712TypedDataValue").optional(),
    deadline: number,
    nonce: number,
    profileId: string,
    profileIdPointed: string,
    pubIdPointed: string,
    referenceModule: string,
    referenceModuleData: ethers.Bytes,
    referenceModuleInitData: ethers.Bytes,
  });
}

export function CreateMirrorRequestSchema(): z.ZodObject<
  Properties<CreateMirrorRequest>
> {
  return z.object({
    profileId: string,
    publicationId: string,
    referenceModule: definedNonNullAnySchema.nullish(),
  });
}

export function CreatePostBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreatePostBroadcastItemResult>
> {
  return z.object({
    __typename: z.literal("CreatePostBroadcastItemResult").optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreatePostEip712TypedDataSchema(): z.ZodObject<
  Properties<CreatePostEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreatePostEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreatePostEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreatePostEip712TypedDataTypes>
> {
  return z.object({
    __typename: z.literal("CreatePostEIP712TypedDataTypes").optional(),
    PostWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreatePostEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreatePostEip712TypedDataValue>
> {
  return z.object({
    __typename: z.literal("CreatePostEIP712TypedDataValue").optional(),
    collectModule: string,
    collectModuleInitData: ethers.Bytes,
    contentURI: string,
    deadline: number,
    nonce: number,
    profileId: string,
    referenceModule: string,
    referenceModuleInitData: ethers.Bytes,
  });
}

export function CreateProfileRequestSchema(): z.ZodObject<
  Properties<CreateProfileRequest>
> {
  return z.object({
    followModule: definedNonNullAnySchema.nullish(),
    followNFTURI: string.nullish(),
    handle: definedNonNullAnySchema,
    profilePictureUri: string.nullish(),
  });
}

export function CreatePublicCommentRequestSchema(): z.ZodObject<
  Properties<CreatePublicCommentRequest>
> {
  return z.object({
    collectModule: definedNonNullAnySchema,
    contentURI: string,
    gated: z.lazy(() => definedNonNullAnySchema.nullish()),
    profileId: string,
    publicationId: string,
    referenceModule: definedNonNullAnySchema.nullish(),
  });
}

export function CreatePublicPostRequestSchema(): z.ZodObject<
  Properties<CreatePublicPostRequest>
> {
  return z.object({
    collectModule: definedNonNullAnySchema,
    contentURI: string,
    gated: z.lazy(() => definedNonNullAnySchema.nullish()),
    profileId: string,
    referenceModule: definedNonNullAnySchema.nullish(),
  });
}

export function CreatePublicSetProfileMetadataUriRequestSchema(): z.ZodObject<
  Properties<CreatePublicSetProfileMetadataUriRequest>
> {
  return z.object({
    metadata: string,
    profileId: string,
  });
}

export function CreateSetDefaultProfileRequestSchema(): z.ZodObject<
  Properties<CreateSetDefaultProfileRequest>
> {
  return z.object({
    profileId: string,
  });
}

export function CreateSetDispatcherBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateSetDispatcherBroadcastItemResult>
> {
  return z.object({
    __typename: z.literal("CreateSetDispatcherBroadcastItemResult").optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateSetDispatcherEip712TypedDataSchema(): z.ZodObject<
  Properties<CreateSetDispatcherEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreateSetDispatcherEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateSetDispatcherEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateSetDispatcherEip712TypedDataTypes>
> {
  return z.object({
    __typename: z.literal("CreateSetDispatcherEIP712TypedDataTypes").optional(),
    SetDispatcherWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateSetDispatcherEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateSetDispatcherEip712TypedDataValue>
> {
  return z.object({
    __typename: z.literal("CreateSetDispatcherEIP712TypedDataValue").optional(),
    deadline: number,
    dispatcher: string,
    nonce: number,
    profileId: string,
  });
}

export function CreateSetFollowModuleBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateSetFollowModuleBroadcastItemResult>
> {
  return z.object({
    __typename: z
      .literal("CreateSetFollowModuleBroadcastItemResult")
      .optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateSetFollowModuleEip712TypedDataSchema(): z.ZodObject<
  Properties<CreateSetFollowModuleEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreateSetFollowModuleEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateSetFollowModuleEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateSetFollowModuleEip712TypedDataTypes>
> {
  return z.object({
    __typename: z
      .literal("CreateSetFollowModuleEIP712TypedDataTypes")
      .optional(),
    SetFollowModuleWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateSetFollowModuleEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateSetFollowModuleEip712TypedDataValue>
> {
  return z.object({
    __typename: z
      .literal("CreateSetFollowModuleEIP712TypedDataValue")
      .optional(),
    deadline: number,
    followModule: string,
    followModuleInitData: ethers.Bytes,
    nonce: number,
    profileId: string,
  });
}

export function CreateSetFollowModuleRequestSchema(): z.ZodObject<
  Properties<CreateSetFollowModuleRequest>
> {
  return z.object({
    followModule: definedNonNullAnySchema,
    profileId: string,
  });
}

export function CreateSetFollowNftUriBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateSetFollowNftUriBroadcastItemResult>
> {
  return z.object({
    __typename: z
      .literal("CreateSetFollowNFTUriBroadcastItemResult")
      .optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateSetFollowNftUriEip712TypedDataSchema(): z.ZodObject<
  Properties<CreateSetFollowNftUriEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreateSetFollowNFTUriEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateSetFollowNftUriEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateSetFollowNftUriEip712TypedDataTypes>
> {
  return z.object({
    __typename: z
      .literal("CreateSetFollowNFTUriEIP712TypedDataTypes")
      .optional(),
    SetFollowNFTURIWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateSetFollowNftUriEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateSetFollowNftUriEip712TypedDataValue>
> {
  return z.object({
    __typename: z
      .literal("CreateSetFollowNFTUriEIP712TypedDataValue")
      .optional(),
    deadline: number,
    followNFTURI: string,
    nonce: number,
    profileId: string,
  });
}

export function CreateSetFollowNftUriRequestSchema(): z.ZodObject<
  Properties<CreateSetFollowNftUriRequest>
> {
  return z.object({
    followNFTURI: string.nullish(),
    profileId: string,
  });
}

export function CreateSetProfileImageUriBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateSetProfileImageUriBroadcastItemResult>
> {
  return z.object({
    __typename: z
      .literal("CreateSetProfileImageUriBroadcastItemResult")
      .optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateSetProfileImageUriEip712TypedDataSchema(): z.ZodObject<
  Properties<CreateSetProfileImageUriEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreateSetProfileImageUriEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateSetProfileImageUriEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateSetProfileImageUriEip712TypedDataTypes>
> {
  return z.object({
    __typename: z
      .literal("CreateSetProfileImageUriEIP712TypedDataTypes")
      .optional(),
    SetProfileImageURIWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateSetProfileImageUriEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateSetProfileImageUriEip712TypedDataValue>
> {
  return z.object({
    __typename: z
      .literal("CreateSetProfileImageUriEIP712TypedDataValue")
      .optional(),
    deadline: number,
    imageURI: string,
    nonce: number,
    profileId: string,
  });
}

export function CreateSetProfileMetadataUriBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateSetProfileMetadataUriBroadcastItemResult>
> {
  return z.object({
    __typename: z
      .literal("CreateSetProfileMetadataURIBroadcastItemResult")
      .optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateSetProfileMetadataUrieip712TypedDataSchema(): z.ZodObject<
  Properties<CreateSetProfileMetadataUrieip712TypedData>
> {
  return z.object({
    __typename: z
      .literal("CreateSetProfileMetadataURIEIP712TypedData")
      .optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateSetProfileMetadataUrieip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateSetProfileMetadataUrieip712TypedDataTypes>
> {
  return z.object({
    __typename: z
      .literal("CreateSetProfileMetadataURIEIP712TypedDataTypes")
      .optional(),
    SetProfileMetadataURIWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateSetProfileMetadataUrieip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateSetProfileMetadataUrieip712TypedDataValue>
> {
  return z.object({
    __typename: z
      .literal("CreateSetProfileMetadataURIEIP712TypedDataValue")
      .optional(),
    deadline: number,
    metadata: string,
    nonce: number,
    profileId: string,
  });
}

export function CreateToggleFollowBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateToggleFollowBroadcastItemResult>
> {
  return z.object({
    __typename: z.literal("CreateToggleFollowBroadcastItemResult").optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function CreateToggleFollowEip712TypedDataSchema(): z.ZodObject<
  Properties<CreateToggleFollowEip712TypedData>
> {
  return z.object({
    __typename: z.literal("CreateToggleFollowEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function CreateToggleFollowEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<CreateToggleFollowEip712TypedDataTypes>
> {
  return z.object({
    __typename: z.literal("CreateToggleFollowEIP712TypedDataTypes").optional(),
    ToggleFollowWithSig: z.array(definedNonNullAnySchema),
  });
}

export function CreateToggleFollowEip712TypedDataValueSchema(): z.ZodObject<
  Properties<CreateToggleFollowEip712TypedDataValue>
> {
  return z.object({
    __typename: z.literal("CreateToggleFollowEIP712TypedDataValue").optional(),
    deadline: number,
    enables: z.array(z.boolean()),
    nonce: number,
    profileIds: z.array(string),
  });
}

export function CreateToggleFollowRequestSchema(): z.ZodObject<
  Properties<CreateToggleFollowRequest>
> {
  return z.object({
    enables: z.array(z.boolean()),
    profileIds: z.array(string),
  });
}

export function CreateUnfollowBroadcastItemResultSchema(): z.ZodObject<
  Properties<CreateUnfollowBroadcastItemResult>
> {
  return z.object({
    __typename: z.literal("CreateUnfollowBroadcastItemResult").optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export const CustomFiltersTypesSchema = z.nativeEnum(CustomFiltersTypes);

export const DecryptFailReasonSchema = z.nativeEnum(DecryptFailReason);

export function DefaultProfileRequestSchema(): z.ZodObject<
  Properties<DefaultProfileRequest>
> {
  return z.object({
    ethereumAddress: string,
  });
}

export function DegreesOfSeparationReferenceModuleParamsSchema(): z.ZodObject<
  Properties<DegreesOfSeparationReferenceModuleParams>
> {
  return z.object({
    commentsRestricted: z.boolean(),
    degreesOfSeparation: z.number(),
    mirrorsRestricted: z.boolean(),
  });
}

export function DegreesOfSeparationReferenceModuleSettingsSchema(): z.ZodObject<
  Properties<DegreesOfSeparationReferenceModuleSettings>
> {
  return z.object({
    __typename: z
      .literal("DegreesOfSeparationReferenceModuleSettings")
      .optional(),
    commentsRestricted: z.boolean(),
    contractAddress: string,
    degreesOfSeparation: z.number(),
    mirrorsRestricted: z.boolean(),
    type: definedNonNullAnySchema,
  });
}

export function DispatcherSchema(): z.ZodObject<Properties<Dispatcher>> {
  return z.object({
    __typename: z.literal("Dispatcher").optional(),
    address: string,
    canUseRelay: z.boolean(),
  });
}

export function DoesFollowSchema(): z.ZodObject<Properties<DoesFollow>> {
  return z.object({
    followerAddress: string,
    profileId: string,
  });
}

export function DoesFollowRequestSchema(): z.ZodObject<
  Properties<DoesFollowRequest>
> {
  return z.object({
    followInfos: z.array(definedNonNullAnySchema),
  });
}

export function DoesFollowResponseSchema(): z.ZodObject<
  Properties<DoesFollowResponse>
> {
  return z.object({
    __typename: z.literal("DoesFollowResponse").optional(),
    followerAddress: string,
    follows: z.boolean(),
    isFinalisedOnChain: z.boolean(),
    profileId: string,
  });
}

export function Eip712TypedDataDomainSchema(): z.ZodObject<
  Properties<Eip712TypedDataDomain>
> {
  return z.object({
    __typename: z.literal("EIP712TypedDataDomain").optional(),
    chainId: number,
    name: z.string(),
    verifyingContract: string,
    version: z.string(),
  });
}

export function Eip712TypedDataFieldSchema(): z.ZodObject<
  Properties<Eip712TypedDataField>
> {
  return z.object({
    __typename: z.literal("EIP712TypedDataField").optional(),
    name: z.string(),
    type: z.string(),
  });
}

export function ElectedMirrorSchema(): z.ZodObject<Properties<ElectedMirror>> {
  return z.object({
    __typename: z.literal("ElectedMirror").optional(),
    mirrorId: string,
    profile: definedNonNullAnySchema,
    timestamp: Date,
  });
}

export function EnabledModuleSchema(): z.ZodObject<Properties<EnabledModule>> {
  return z.object({
    __typename: z.literal("EnabledModule").optional(),
    contractAddress: string,
    inputParams: z.array(definedNonNullAnySchema),
    moduleName: z.string(),
    redeemParams: z.array(definedNonNullAnySchema),
    returnDataParms: z.array(definedNonNullAnySchema),
  });
}

export function EnabledModulesSchema(): z.ZodObject<
  Properties<EnabledModules>
> {
  return z.object({
    __typename: z.literal("EnabledModules").optional(),
    collectModules: z.array(definedNonNullAnySchema),
    followModules: z.array(definedNonNullAnySchema),
    referenceModules: z.array(definedNonNullAnySchema),
  });
}

export function EncryptedFieldsOutputSchema(): z.ZodObject<
  Properties<EncryptedFieldsOutput>
> {
  return z.object({
    __typename: z.literal("EncryptedFieldsOutput").optional(),
    animation_url: definedNonNullAnySchema.nullish(),
    content: definedNonNullAnySchema.nullish(),
    external_url: definedNonNullAnySchema.nullish(),
    image: definedNonNullAnySchema.nullish(),
    media: z.array(definedNonNullAnySchema).nullish(),
  });
}

export function EncryptedMediaSchema(): z.ZodObject<
  Properties<EncryptedMedia>
> {
  return z.object({
    __typename: z.literal("EncryptedMedia").optional(),
    altTag: definedNonNullAnySchema.nullish(),
    cover: definedNonNullAnySchema.nullish(),
    height: z.number().nullish(),
    mimeType: string.nullish(),
    size: z.number().nullish(),
    url: string,
    width: z.number().nullish(),
  });
}

export function EncryptedMediaSetSchema(): z.ZodObject<
  Properties<EncryptedMediaSet>
> {
  return z.object({
    __typename: z.literal("EncryptedMediaSet").optional(),
    medium: definedNonNullAnySchema.nullish(),
    original: definedNonNullAnySchema,
    small: definedNonNullAnySchema.nullish(),
  });
}

export function EncryptionParamsOutputSchema(): z.ZodObject<
  Properties<EncryptionParamsOutput>
> {
  return z.object({
    __typename: z.literal("EncryptionParamsOutput").optional(),
    accessCondition: definedNonNullAnySchema,
    encryptedFields: definedNonNullAnySchema,
    encryptionProvider: definedNonNullAnySchema,
    providerSpecificParams: definedNonNullAnySchema,
  });
}

export const EncryptionProviderSchema = z.nativeEnum(EncryptionProvider);

export function EnsOnChainIdentitySchema(): z.ZodObject<
  Properties<EnsOnChainIdentity>
> {
  return z.object({
    __typename: z.literal("EnsOnChainIdentity").optional(),
    name: string.nullish(),
  });
}

export function EoaOwnershipInputSchema(): z.ZodObject<
  Properties<EoaOwnershipInput>
> {
  return z.object({
    address: string,
    chainID: number,
  });
}

export function EoaOwnershipOutputSchema(): z.ZodObject<
  Properties<EoaOwnershipOutput>
> {
  return z.object({
    __typename: z.literal("EoaOwnershipOutput").optional(),
    address: string,
    chainID: number,
  });
}

export function Erc20Schema(): z.ZodObject<Properties<Erc20>> {
  return z.object({
    __typename: z.literal("Erc20").optional(),
    address: string,
    decimals: z.number(),
    name: z.string(),
    symbol: z.string(),
  });
}

export function Erc20AmountSchema(): z.ZodObject<Properties<Erc20Amount>> {
  return z.object({
    __typename: z.literal("Erc20Amount").optional(),
    asset: definedNonNullAnySchema,
    value: z.string(),
  });
}

export function Erc20OwnershipInputSchema(): z.ZodObject<
  Properties<Erc20OwnershipInput>
> {
  return z.object({
    amount: z.string(),
    chainID: number,
    condition: definedNonNullAnySchema,
    contractAddress: string,
    decimals: z.number(),
  });
}

export function Erc20OwnershipOutputSchema(): z.ZodObject<
  Properties<Erc20OwnershipOutput>
> {
  return z.object({
    __typename: z.literal("Erc20OwnershipOutput").optional(),
    amount: z.string(),
    chainID: number,
    condition: definedNonNullAnySchema,
    contractAddress: string,
    decimals: z.number(),
  });
}

export function ExploreProfileResultSchema(): z.ZodObject<
  Properties<ExploreProfileResult>
> {
  return z.object({
    __typename: z.literal("ExploreProfileResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function ExploreProfilesRequestSchema(): z.ZodObject<
  Properties<ExploreProfilesRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    customFilters: z.array(definedNonNullAnySchema).nullish(),
    limit: number.nullish(),
    sortCriteria: definedNonNullAnySchema,
    timestamp: number.nullish(),
  });
}

export function ExplorePublicationRequestSchema(): z.ZodObject<
  Properties<ExplorePublicationRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    customFilters: z.array(definedNonNullAnySchema).nullish(),
    excludeProfileIds: z.array(string).nullish(),
    limit: number.nullish(),
    metadata: definedNonNullAnySchema.nullish(),
    noRandomize: z.boolean().nullish(),
    publicationTypes: z.array(definedNonNullAnySchema).nullish(),
    sortCriteria: definedNonNullAnySchema,
    sources: z.array(string).nullish(),
    timestamp: number.nullish(),
  });
}

export function ExplorePublicationResultSchema(): z.ZodObject<
  Properties<ExplorePublicationResult>
> {
  return z.object({
    __typename: z.literal("ExplorePublicationResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function FeeCollectModuleParamsSchema(): z.ZodObject<
  Properties<FeeCollectModuleParams>
> {
  return z.object({
    amount: definedNonNullAnySchema,
    followerOnly: z.boolean(),
    recipient: string,
    referralFee: z.number(),
  });
}

export function FeeCollectModuleSettingsSchema(): z.ZodObject<
  Properties<FeeCollectModuleSettings>
> {
  return z.object({
    __typename: z.literal("FeeCollectModuleSettings").optional(),
    amount: definedNonNullAnySchema,
    contractAddress: string,
    followerOnly: z.boolean(),
    recipient: string,
    referralFee: z.number(),
    type: definedNonNullAnySchema,
  });
}

export function FeeFollowModuleParamsSchema(): z.ZodObject<
  Properties<FeeFollowModuleParams>
> {
  return z.object({
    amount: definedNonNullAnySchema,
    recipient: string,
  });
}

export function FeeFollowModuleRedeemParamsSchema(): z.ZodObject<
  Properties<FeeFollowModuleRedeemParams>
> {
  return z.object({
    amount: definedNonNullAnySchema,
  });
}

export function FeeFollowModuleSettingsSchema(): z.ZodObject<
  Properties<FeeFollowModuleSettings>
> {
  return z.object({
    __typename: z.literal("FeeFollowModuleSettings").optional(),
    amount: definedNonNullAnySchema,
    contractAddress: string,
    recipient: string,
    type: definedNonNullAnySchema,
  });
}

export const FeedEventItemTypeSchema = z.nativeEnum(FeedEventItemType);

export function FeedHighlightsRequestSchema(): z.ZodObject<
  Properties<FeedHighlightsRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
    metadata: definedNonNullAnySchema.nullish(),
    profileId: string,
    sources: z.array(string).nullish(),
  });
}

export function FeedItemSchema(): z.ZodObject<Properties<FeedItem>> {
  return z.object({
    __typename: z.literal("FeedItem").optional(),
    collects: z.array(definedNonNullAnySchema),
    comments: z.array(definedNonNullAnySchema).nullish(),
    electedMirror: definedNonNullAnySchema.nullish(),
    mirrors: z.array(definedNonNullAnySchema),
    reactions: z.array(definedNonNullAnySchema),
    root: definedNonNullAnySchema,
  });
}

export function FeedRequestSchema(): z.ZodObject<Properties<FeedRequest>> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    feedEventItemTypes: z.array(definedNonNullAnySchema).nullish(),
    limit: number.nullish(),
    metadata: definedNonNullAnySchema.nullish(),
    profileId: string,
    sources: z.array(string).nullish(),
  });
}

export function FollowSchema(): z.ZodObject<Properties<Follow>> {
  return z.object({
    followModule: definedNonNullAnySchema.nullish(),
    profile: string,
  });
}

export function FollowConditionInputSchema(): z.ZodObject<
  Properties<FollowConditionInput>
> {
  return z.object({
    profileId: string,
  });
}

export function FollowConditionOutputSchema(): z.ZodObject<
  Properties<FollowConditionOutput>
> {
  return z.object({
    __typename: z.literal("FollowConditionOutput").optional(),
    profileId: string,
  });
}

export function FollowModuleParamsSchema(): z.ZodObject<
  Properties<FollowModuleParams>
> {
  return z.object({
    feeFollowModule: definedNonNullAnySchema.nullish(),
    freeFollowModule: z.boolean().nullish(),
    profileFollowModule: z.boolean().nullish(),
    revertFollowModule: z.boolean().nullish(),
    unknownFollowModule: definedNonNullAnySchema.nullish(),
  });
}

export function FollowModuleRedeemParamsSchema(): z.ZodObject<
  Properties<FollowModuleRedeemParams>
> {
  return z.object({
    feeFollowModule: definedNonNullAnySchema.nullish(),
    profileFollowModule: definedNonNullAnySchema.nullish(),
    unknownFollowModule: definedNonNullAnySchema.nullish(),
  });
}

export const FollowModulesSchema = z.nativeEnum(FollowModules);

export function FollowOnlyReferenceModuleSettingsSchema(): z.ZodObject<
  Properties<FollowOnlyReferenceModuleSettings>
> {
  return z.object({
    __typename: z.literal("FollowOnlyReferenceModuleSettings").optional(),
    contractAddress: string,
    type: definedNonNullAnySchema,
  });
}

export function FollowProxyActionSchema(): z.ZodObject<
  Properties<FollowProxyAction>
> {
  return z.object({
    freeFollow: definedNonNullAnySchema.nullish(),
  });
}

export function FollowRequestSchema(): z.ZodObject<Properties<FollowRequest>> {
  return z.object({
    follow: z.array(definedNonNullAnySchema),
  });
}

export function FollowRevenueResultSchema(): z.ZodObject<
  Properties<FollowRevenueResult>
> {
  return z.object({
    __typename: z.literal("FollowRevenueResult").optional(),
    revenues: z.array(definedNonNullAnySchema),
  });
}

export function FollowerSchema(): z.ZodObject<Properties<Follower>> {
  return z.object({
    __typename: z.literal("Follower").optional(),
    totalAmountOfTimesFollowed: z.number(),
    wallet: definedNonNullAnySchema,
  });
}

export function FollowerNftOwnedTokenIdsSchema(): z.ZodObject<
  Properties<FollowerNftOwnedTokenIds>
> {
  return z.object({
    __typename: z.literal("FollowerNftOwnedTokenIds").optional(),
    followerNftAddress: string,
    tokensIds: z.array(z.string()),
  });
}

export function FollowerNftOwnedTokenIdsRequestSchema(): z.ZodObject<
  Properties<FollowerNftOwnedTokenIdsRequest>
> {
  return z.object({
    address: string,
    profileId: string,
  });
}

export function FollowersRequestSchema(): z.ZodObject<
  Properties<FollowersRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
    profileId: string,
  });
}

export function FollowingSchema(): z.ZodObject<Properties<Following>> {
  return z.object({
    __typename: z.literal("Following").optional(),
    profile: definedNonNullAnySchema,
    totalAmountOfTimesFollowing: z.number(),
  });
}

export function FollowingRequestSchema(): z.ZodObject<
  Properties<FollowingRequest>
> {
  return z.object({
    address: string,
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
  });
}

export function FraudReasonInputParamsSchema(): z.ZodObject<
  Properties<FraudReasonInputParams>
> {
  return z.object({
    reason: definedNonNullAnySchema,
    subreason: definedNonNullAnySchema,
  });
}

export function FreeCollectModuleParamsSchema(): z.ZodObject<
  Properties<FreeCollectModuleParams>
> {
  return z.object({
    followerOnly: z.boolean(),
  });
}

export function FreeCollectModuleSettingsSchema(): z.ZodObject<
  Properties<FreeCollectModuleSettings>
> {
  return z.object({
    __typename: z.literal("FreeCollectModuleSettings").optional(),
    contractAddress: string,
    followerOnly: z.boolean(),
    type: definedNonNullAnySchema,
  });
}

export function FreeCollectProxyActionSchema(): z.ZodObject<
  Properties<FreeCollectProxyAction>
> {
  return z.object({
    publicationId: string,
  });
}

export function FreeFollowProxyActionSchema(): z.ZodObject<
  Properties<FreeFollowProxyAction>
> {
  return z.object({
    profileId: string,
  });
}

export function GatedPublicationParamsInputSchema(): z.ZodObject<
  Properties<GatedPublicationParamsInput>
> {
  return z.object({
    and: z.lazy(() => definedNonNullAnySchema.nullish()),
    collect: z.lazy(() => definedNonNullAnySchema.nullish()),
    encryptedSymmetricKey: definedNonNullAnySchema,
    eoa: z.lazy(() => definedNonNullAnySchema.nullish()),
    follow: z.lazy(() => definedNonNullAnySchema.nullish()),
    nft: z.lazy(() => definedNonNullAnySchema.nullish()),
    or: z.lazy(() => definedNonNullAnySchema.nullish()),
    profile: z.lazy(() => definedNonNullAnySchema.nullish()),
    token: z.lazy(() => definedNonNullAnySchema.nullish()),
  });
}

export function GenerateModuleCurrencyApprovalSchema(): z.ZodObject<
  Properties<GenerateModuleCurrencyApproval>
> {
  return z.object({
    __typename: z.literal("GenerateModuleCurrencyApproval").optional(),
    data: ethers.Bytes,
    from: string,
    to: string,
  });
}

export function GenerateModuleCurrencyApprovalDataRequestSchema(): z.ZodObject<
  Properties<GenerateModuleCurrencyApprovalDataRequest>
> {
  return z.object({
    collectModule: definedNonNullAnySchema.nullish(),
    currency: string,
    followModule: definedNonNullAnySchema.nullish(),
    referenceModule: definedNonNullAnySchema.nullish(),
    unknownCollectModule: string.nullish(),
    unknownFollowModule: string.nullish(),
    unknownReferenceModule: string.nullish(),
    value: z.string(),
  });
}

export function GetPublicationMetadataStatusRequestSchema(): z.ZodObject<
  Properties<GetPublicationMetadataStatusRequest>
> {
  return z.object({
    publicationId: string.nullish(),
    txHash: string.nullish(),
    txId: string.nullish(),
  });
}

export function GlobalProtocolStatsSchema(): z.ZodObject<
  Properties<GlobalProtocolStats>
> {
  return z.object({
    __typename: z.literal("GlobalProtocolStats").optional(),
    totalBurntProfiles: z.number(),
    totalCollects: z.number(),
    totalComments: z.number(),
    totalFollows: z.number(),
    totalMirrors: z.number(),
    totalPosts: z.number(),
    totalProfiles: z.number(),
    totalRevenue: z.array(definedNonNullAnySchema),
  });
}

export function GlobalProtocolStatsRequestSchema(): z.ZodObject<
  Properties<GlobalProtocolStatsRequest>
> {
  return z.object({
    fromTimestamp: number.nullish(),
    sources: z.array(string).nullish(),
    toTimestamp: number.nullish(),
  });
}

export function HasTxHashBeenIndexedRequestSchema(): z.ZodObject<
  Properties<HasTxHashBeenIndexedRequest>
> {
  return z.object({
    txHash: string.nullish(),
    txId: string.nullish(),
  });
}

export function HidePublicationRequestSchema(): z.ZodObject<
  Properties<HidePublicationRequest>
> {
  return z.object({
    publicationId: string,
  });
}

export function IllegalReasonInputParamsSchema(): z.ZodObject<
  Properties<IllegalReasonInputParams>
> {
  return z.object({
    reason: definedNonNullAnySchema,
    subreason: definedNonNullAnySchema,
  });
}

export function InternalPublicationsFilterRequestSchema(): z.ZodObject<
  Properties<InternalPublicationsFilterRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    fromDate: z.string(),
    limit: number.nullish(),
    secret: z.string(),
    source: string,
    toDate: z.string(),
  });
}

export function LimitedFeeCollectModuleParamsSchema(): z.ZodObject<
  Properties<LimitedFeeCollectModuleParams>
> {
  return z.object({
    amount: definedNonNullAnySchema,
    collectLimit: z.string(),
    followerOnly: z.boolean(),
    recipient: string,
    referralFee: z.number(),
  });
}

export function LimitedFeeCollectModuleSettingsSchema(): z.ZodObject<
  Properties<LimitedFeeCollectModuleSettings>
> {
  return z.object({
    __typename: z.literal("LimitedFeeCollectModuleSettings").optional(),
    amount: definedNonNullAnySchema,
    collectLimit: z.string(),
    contractAddress: string,
    followerOnly: z.boolean(),
    recipient: string,
    referralFee: z.number(),
    type: definedNonNullAnySchema,
  });
}

export function LimitedTimedFeeCollectModuleParamsSchema(): z.ZodObject<
  Properties<LimitedTimedFeeCollectModuleParams>
> {
  return z.object({
    amount: definedNonNullAnySchema,
    collectLimit: z.string(),
    followerOnly: z.boolean(),
    recipient: string,
    referralFee: z.number(),
  });
}

export function LimitedTimedFeeCollectModuleSettingsSchema(): z.ZodObject<
  Properties<LimitedTimedFeeCollectModuleSettings>
> {
  return z.object({
    __typename: z.literal("LimitedTimedFeeCollectModuleSettings").optional(),
    amount: definedNonNullAnySchema,
    collectLimit: z.string(),
    contractAddress: string,
    endTimestamp: Date,
    followerOnly: z.boolean(),
    recipient: string,
    referralFee: z.number(),
    type: definedNonNullAnySchema,
  });
}

export function LogSchema(): z.ZodObject<Properties<Log>> {
  return z.object({
    __typename: z.literal("Log").optional(),
    address: string,
    blockHash: z.string(),
    blockNumber: z.number(),
    data: z.string(),
    logIndex: z.number(),
    removed: z.boolean(),
    topics: z.array(z.string()),
    transactionHash: string,
    transactionIndex: z.number(),
  });
}

export function MediaSchema(): z.ZodObject<Properties<Media>> {
  return z.object({
    __typename: z.literal("Media").optional(),
    altTag: z.string().nullish(),
    cover: string.nullish(),
    height: z.number().nullish(),
    mimeType: string.nullish(),
    size: z.number().nullish(),
    url: string,
    width: z.number().nullish(),
  });
}

export function MediaOutputSchema(): z.ZodObject<Properties<MediaOutput>> {
  return z.object({
    __typename: z.literal("MediaOutput").optional(),
    altTag: z.string().nullish(),
    cover: string.nullish(),
    item: string,
    source: definedNonNullAnySchema.nullish(),
    type: string.nullish(),
  });
}

export function MediaSetSchema(): z.ZodObject<Properties<MediaSet>> {
  return z.object({
    __typename: z.literal("MediaSet").optional(),
    medium: definedNonNullAnySchema.nullish(),
    original: definedNonNullAnySchema,
    small: definedNonNullAnySchema.nullish(),
  });
}

export function MetadataAttributeInputSchema(): z.ZodObject<
  Properties<MetadataAttributeInput>
> {
  return z.object({
    displayType: definedNonNullAnySchema.nullish(),
    traitType: z.string(),
    value: z.string(),
  });
}

export function MetadataAttributeOutputSchema(): z.ZodObject<
  Properties<MetadataAttributeOutput>
> {
  return z.object({
    __typename: z.literal("MetadataAttributeOutput").optional(),
    displayType: definedNonNullAnySchema.nullish(),
    traitType: z.string().nullish(),
    value: z.string().nullish(),
  });
}

export function MetadataOutputSchema(): z.ZodObject<
  Properties<MetadataOutput>
> {
  return z.object({
    __typename: z.literal("MetadataOutput").optional(),
    animatedUrl: string.nullish(),
    attributes: z.array(definedNonNullAnySchema),
    content: string.nullish(),
    contentWarning: definedNonNullAnySchema.nullish(),
    cover: definedNonNullAnySchema.nullish(),
    description: string.nullish(),
    encryptionParams: definedNonNullAnySchema.nullish(),
    image: string.nullish(),
    locale: string.nullish(),
    mainContentFocus: definedNonNullAnySchema,
    media: z.array(definedNonNullAnySchema),
    name: z.string().nullish(),
    tags: z.array(z.string()),
  });
}

export function MirrorSchema(): z.ZodObject<Properties<Mirror>> {
  return z.object({
    __typename: z.literal("Mirror").optional(),
    appId: string.nullish(),
    canComment: definedNonNullAnySchema,
    canDecrypt: definedNonNullAnySchema,
    canMirror: definedNonNullAnySchema,
    collectModule: definedNonNullAnySchema,
    collectNftAddress: string.nullish(),
    createdAt: Date,
    hasCollectedByMe: z.boolean(),
    hidden: z.boolean(),
    id: string,
    isGated: z.boolean(),
    metadata: definedNonNullAnySchema,
    mirrorOf: definedNonNullAnySchema,
    onChainContentURI: z.string(),
    profile: definedNonNullAnySchema,
    reaction: definedNonNullAnySchema.nullish(),
    referenceModule: definedNonNullAnySchema.nullish(),
    stats: definedNonNullAnySchema,
  });
}

export function MirrorEventSchema(): z.ZodObject<Properties<MirrorEvent>> {
  return z.object({
    __typename: z.literal("MirrorEvent").optional(),
    profile: definedNonNullAnySchema,
    timestamp: Date,
  });
}

export function ModuleFeeAmountSchema(): z.ZodObject<
  Properties<ModuleFeeAmount>
> {
  return z.object({
    __typename: z.literal("ModuleFeeAmount").optional(),
    asset: definedNonNullAnySchema,
    value: z.string(),
  });
}

export function ModuleFeeAmountParamsSchema(): z.ZodObject<
  Properties<ModuleFeeAmountParams>
> {
  return z.object({
    currency: string,
    value: z.string(),
  });
}

export function ModuleInfoSchema(): z.ZodObject<Properties<ModuleInfo>> {
  return z.object({
    __typename: z.literal("ModuleInfo").optional(),
    name: z.string(),
    type: z.string(),
  });
}

export function MutualFollowersProfilesQueryRequestSchema(): z.ZodObject<
  Properties<MutualFollowersProfilesQueryRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
    viewingProfileId: string,
    yourProfileId: string,
  });
}

export function NftSchema(): z.ZodObject<Properties<Nft>> {
  return z.object({
    __typename: z.literal("NFT").optional(),
    chainId: number,
    collectionName: z.string(),
    contentURI: z.string(),
    contractAddress: string,
    contractName: z.string(),
    description: z.string(),
    ercType: z.string(),
    name: z.string(),
    originalContent: definedNonNullAnySchema,
    owners: z.array(definedNonNullAnySchema),
    symbol: z.string(),
    tokenId: z.string(),
  });
}

export function NftContentSchema(): z.ZodObject<Properties<NftContent>> {
  return z.object({
    __typename: z.literal("NFTContent").optional(),
    animatedUrl: z.string().nullish(),
    metaType: z.string(),
    uri: z.string(),
  });
}

export function NftDataSchema(): z.ZodObject<Properties<NftData>> {
  return z.object({
    id: string,
    signature: string,
  });
}

export function NfTsRequestSchema(): z.ZodObject<Properties<NfTsRequest>> {
  return z.object({
    chainIds: z.array(number),
    contractAddress: string.nullish(),
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
    ownerAddress: string,
  });
}

export function NfTsResultSchema(): z.ZodObject<Properties<NfTsResult>> {
  return z.object({
    __typename: z.literal("NFTsResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function NewCollectNotificationSchema(): z.ZodObject<
  Properties<NewCollectNotification>
> {
  return z.object({
    __typename: z.literal("NewCollectNotification").optional(),
    collectedPublication: definedNonNullAnySchema,
    createdAt: Date,
    notificationId: string,
    wallet: definedNonNullAnySchema,
  });
}

export function NewCommentNotificationSchema(): z.ZodObject<
  Properties<NewCommentNotification>
> {
  return z.object({
    __typename: z.literal("NewCommentNotification").optional(),
    comment: definedNonNullAnySchema,
    createdAt: Date,
    notificationId: string,
    profile: definedNonNullAnySchema,
  });
}

export function NewFollowerNotificationSchema(): z.ZodObject<
  Properties<NewFollowerNotification>
> {
  return z.object({
    __typename: z.literal("NewFollowerNotification").optional(),
    createdAt: Date,
    isFollowedByMe: z.boolean(),
    notificationId: string,
    wallet: definedNonNullAnySchema,
  });
}

export function NewMentionNotificationSchema(): z.ZodObject<
  Properties<NewMentionNotification>
> {
  return z.object({
    __typename: z.literal("NewMentionNotification").optional(),
    createdAt: Date,
    mentionPublication: definedNonNullAnySchema,
    notificationId: string,
  });
}

export function NewMirrorNotificationSchema(): z.ZodObject<
  Properties<NewMirrorNotification>
> {
  return z.object({
    __typename: z.literal("NewMirrorNotification").optional(),
    createdAt: Date,
    notificationId: string,
    profile: definedNonNullAnySchema,
    publication: definedNonNullAnySchema,
  });
}

export function NewReactionNotificationSchema(): z.ZodObject<
  Properties<NewReactionNotification>
> {
  return z.object({
    __typename: z.literal("NewReactionNotification").optional(),
    createdAt: Date,
    notificationId: string,
    profile: definedNonNullAnySchema,
    publication: definedNonNullAnySchema,
    reaction: definedNonNullAnySchema,
  });
}

export function NftImageSchema(): z.ZodObject<Properties<NftImage>> {
  return z.object({
    __typename: z.literal("NftImage").optional(),
    chainId: z.number(),
    contractAddress: string,
    tokenId: z.string(),
    uri: string,
    verified: z.boolean(),
  });
}

export function NftOwnershipChallengeSchema(): z.ZodObject<
  Properties<NftOwnershipChallenge>
> {
  return z.object({
    chainId: number,
    contractAddress: string,
    tokenId: z.string(),
  });
}

export function NftOwnershipChallengeRequestSchema(): z.ZodObject<
  Properties<NftOwnershipChallengeRequest>
> {
  return z.object({
    ethereumAddress: string,
    nfts: z.array(definedNonNullAnySchema),
  });
}

export function NftOwnershipChallengeResultSchema(): z.ZodObject<
  Properties<NftOwnershipChallengeResult>
> {
  return z.object({
    __typename: z.literal("NftOwnershipChallengeResult").optional(),
    id: string,
    text: z.string(),
    timeout: number,
  });
}

export function NftOwnershipInputSchema(): z.ZodObject<
  Properties<NftOwnershipInput>
> {
  return z.object({
    chainID: number,
    contractAddress: string,
    contractType: definedNonNullAnySchema,
    tokenIds: definedNonNullAnySchema.nullish(),
  });
}

export function NftOwnershipOutputSchema(): z.ZodObject<
  Properties<NftOwnershipOutput>
> {
  return z.object({
    __typename: z.literal("NftOwnershipOutput").optional(),
    chainID: number,
    contractAddress: string,
    contractType: definedNonNullAnySchema,
    tokenIds: definedNonNullAnySchema.nullish(),
  });
}

export function NotificationRequestSchema(): z.ZodObject<
  Properties<NotificationRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    customFilters: z.array(definedNonNullAnySchema).nullish(),
    limit: number.nullish(),
    metadata: definedNonNullAnySchema.nullish(),
    notificationTypes: z.array(definedNonNullAnySchema).nullish(),
    profileId: string,
    sources: z.array(string).nullish(),
  });
}

export const NotificationTypesSchema = z.nativeEnum(NotificationTypes);

export function OnChainIdentitySchema(): z.ZodObject<
  Properties<OnChainIdentity>
> {
  return z.object({
    __typename: z.literal("OnChainIdentity").optional(),
    ens: definedNonNullAnySchema.nullish(),
    proofOfHumanity: z.boolean(),
    sybilDotOrg: definedNonNullAnySchema,
    worldcoin: definedNonNullAnySchema,
  });
}

export function OrConditionInputSchema(): z.ZodObject<
  Properties<OrConditionInput>
> {
  return z.object({
    criteria: z.array(z.lazy(() => definedNonNullAnySchema)),
  });
}

export function OrConditionOutputSchema(): z.ZodObject<
  Properties<OrConditionOutput>
> {
  return z.object({
    __typename: z.literal("OrConditionOutput").optional(),
    criteria: z.array(definedNonNullAnySchema),
  });
}

export function OwnerSchema(): z.ZodObject<Properties<Owner>> {
  return z.object({
    __typename: z.literal("Owner").optional(),
    address: string,
    amount: z.number(),
  });
}

export function PaginatedAllPublicationsTagsResultSchema(): z.ZodObject<
  Properties<PaginatedAllPublicationsTagsResult>
> {
  return z.object({
    __typename: z.literal("PaginatedAllPublicationsTagsResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PaginatedFeedResultSchema(): z.ZodObject<
  Properties<PaginatedFeedResult>
> {
  return z.object({
    __typename: z.literal("PaginatedFeedResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PaginatedFollowersResultSchema(): z.ZodObject<
  Properties<PaginatedFollowersResult>
> {
  return z.object({
    __typename: z.literal("PaginatedFollowersResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PaginatedFollowingResultSchema(): z.ZodObject<
  Properties<PaginatedFollowingResult>
> {
  return z.object({
    __typename: z.literal("PaginatedFollowingResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PaginatedNotificationResultSchema(): z.ZodObject<
  Properties<PaginatedNotificationResult>
> {
  return z.object({
    __typename: z.literal("PaginatedNotificationResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PaginatedProfilePublicationsForSaleResultSchema(): z.ZodObject<
  Properties<PaginatedProfilePublicationsForSaleResult>
> {
  return z.object({
    __typename: z
      .literal("PaginatedProfilePublicationsForSaleResult")
      .optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PaginatedProfileResultSchema(): z.ZodObject<
  Properties<PaginatedProfileResult>
> {
  return z.object({
    __typename: z.literal("PaginatedProfileResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PaginatedPublicationResultSchema(): z.ZodObject<
  Properties<PaginatedPublicationResult>
> {
  return z.object({
    __typename: z.literal("PaginatedPublicationResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PaginatedResultInfoSchema(): z.ZodObject<
  Properties<PaginatedResultInfo>
> {
  return z.object({
    __typename: z.literal("PaginatedResultInfo").optional(),
    next: definedNonNullAnySchema.nullish(),
    prev: definedNonNullAnySchema.nullish(),
    totalCount: z.number().nullish(),
  });
}

export function PaginatedTimelineResultSchema(): z.ZodObject<
  Properties<PaginatedTimelineResult>
> {
  return z.object({
    __typename: z.literal("PaginatedTimelineResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PaginatedWhoCollectedResultSchema(): z.ZodObject<
  Properties<PaginatedWhoCollectedResult>
> {
  return z.object({
    __typename: z.literal("PaginatedWhoCollectedResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PaginatedWhoReactedResultSchema(): z.ZodObject<
  Properties<PaginatedWhoReactedResult>
> {
  return z.object({
    __typename: z.literal("PaginatedWhoReactedResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PendingApprovalFollowsRequestSchema(): z.ZodObject<
  Properties<PendingApprovalFollowsRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
  });
}

export function PendingApproveFollowsResultSchema(): z.ZodObject<
  Properties<PendingApproveFollowsResult>
> {
  return z.object({
    __typename: z.literal("PendingApproveFollowsResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function PostSchema(): z.ZodObject<Properties<Post>> {
  return z.object({
    __typename: z.literal("Post").optional(),
    appId: string.nullish(),
    canComment: definedNonNullAnySchema,
    canDecrypt: definedNonNullAnySchema,
    canMirror: definedNonNullAnySchema,
    collectModule: definedNonNullAnySchema,
    collectNftAddress: string.nullish(),
    collectedBy: definedNonNullAnySchema.nullish(),
    createdAt: Date,
    hasCollectedByMe: z.boolean(),
    hidden: z.boolean(),
    id: string,
    isGated: z.boolean(),
    metadata: definedNonNullAnySchema,
    mirrors: z.array(string),
    onChainContentURI: z.string(),
    profile: definedNonNullAnySchema,
    reaction: definedNonNullAnySchema.nullish(),
    referenceModule: definedNonNullAnySchema.nullish(),
    stats: definedNonNullAnySchema,
  });
}

export function ProfileSchema(): z.ZodObject<Properties<Profile>> {
  return z.object({
    __typename: z.literal("Profile").optional(),
    attributes: z.array(definedNonNullAnySchema).nullish(),
    bio: z.string().nullish(),
    coverPicture: definedNonNullAnySchema.nullish(),
    dispatcher: definedNonNullAnySchema.nullish(),
    followModule: definedNonNullAnySchema.nullish(),
    followNftAddress: string.nullish(),
    handle: string,
    id: string,
    interests: z.array(definedNonNullAnySchema).nullish(),
    isDefault: z.boolean(),
    isFollowedByMe: z.boolean(),
    isFollowing: z.boolean(),
    metadata: string.nullish(),
    name: z.string().nullish(),
    onChainIdentity: definedNonNullAnySchema,
    ownedBy: string,
    picture: definedNonNullAnySchema.nullish(),
    stats: definedNonNullAnySchema,
  });
}

export function ProfileFollowModuleBeenRedeemedRequestSchema(): z.ZodObject<
  Properties<ProfileFollowModuleBeenRedeemedRequest>
> {
  return z.object({
    followProfileId: string,
    redeemingProfileId: string,
  });
}

export function ProfileFollowModuleRedeemParamsSchema(): z.ZodObject<
  Properties<ProfileFollowModuleRedeemParams>
> {
  return z.object({
    profileId: string,
  });
}

export function ProfileFollowModuleSettingsSchema(): z.ZodObject<
  Properties<ProfileFollowModuleSettings>
> {
  return z.object({
    __typename: z.literal("ProfileFollowModuleSettings").optional(),
    contractAddress: string,
    type: definedNonNullAnySchema,
  });
}

export function ProfileFollowRevenueQueryRequestSchema(): z.ZodObject<
  Properties<ProfileFollowRevenueQueryRequest>
> {
  return z.object({
    profileId: string,
  });
}

export function ProfileOnChainIdentityRequestSchema(): z.ZodObject<
  Properties<ProfileOnChainIdentityRequest>
> {
  return z.object({
    profileIds: z.array(string),
  });
}

export function ProfileOwnershipInputSchema(): z.ZodObject<
  Properties<ProfileOwnershipInput>
> {
  return z.object({
    profileId: string,
  });
}

export function ProfileOwnershipOutputSchema(): z.ZodObject<
  Properties<ProfileOwnershipOutput>
> {
  return z.object({
    __typename: z.literal("ProfileOwnershipOutput").optional(),
    profileId: string,
  });
}

export function ProfilePublicationRevenueQueryRequestSchema(): z.ZodObject<
  Properties<ProfilePublicationRevenueQueryRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
    metadata: definedNonNullAnySchema.nullish(),
    profileId: string,
    sources: z.array(string).nullish(),
    types: z.array(definedNonNullAnySchema).nullish(),
  });
}

export function ProfilePublicationRevenueResultSchema(): z.ZodObject<
  Properties<ProfilePublicationRevenueResult>
> {
  return z.object({
    __typename: z.literal("ProfilePublicationRevenueResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
  });
}

export function ProfilePublicationsForSaleRequestSchema(): z.ZodObject<
  Properties<ProfilePublicationsForSaleRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
    metadata: definedNonNullAnySchema.nullish(),
    profileId: string,
    sources: z.array(string).nullish(),
  });
}

export function ProfileQueryRequestSchema(): z.ZodObject<
  Properties<ProfileQueryRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    handles: z.array(string).nullish(),
    limit: number.nullish(),
    ownedBy: z.array(string).nullish(),
    profileIds: z.array(string).nullish(),
    whoMirroredPublicationId: string.nullish(),
  });
}

export function ProfileSearchResultSchema(): z.ZodObject<
  Properties<ProfileSearchResult>
> {
  return z.object({
    __typename: z.literal("ProfileSearchResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
    type: definedNonNullAnySchema,
  });
}

export const ProfileSortCriteriaSchema = z.nativeEnum(ProfileSortCriteria);

export function ProfileStatsSchema(): z.ZodObject<Properties<ProfileStats>> {
  return z.object({
    __typename: z.literal("ProfileStats").optional(),
    commentsTotal: z.number(),
    id: string,
    mirrorsTotal: z.number(),
    postsTotal: z.number(),
    publicationsTotal: z.number(),
    totalCollects: z.number(),
    totalComments: z.number(),
    totalFollowers: z.number(),
    totalFollowing: z.number(),
    totalMirrors: z.number(),
    totalPosts: z.number(),
    totalPublications: z.number(),
  });
}

export function ProviderSpecificParamsOutputSchema(): z.ZodObject<
  Properties<ProviderSpecificParamsOutput>
> {
  return z.object({
    __typename: z.literal("ProviderSpecificParamsOutput").optional(),
    encryptionKey: definedNonNullAnySchema,
  });
}

export function ProxyActionErrorSchema(): z.ZodObject<
  Properties<ProxyActionError>
> {
  return z.object({
    __typename: z.literal("ProxyActionError").optional(),
    lastKnownTxId: string.nullish(),
    reason: z.string(),
  });
}

export function ProxyActionQueuedSchema(): z.ZodObject<
  Properties<ProxyActionQueued>
> {
  return z.object({
    __typename: z.literal("ProxyActionQueued").optional(),
    queuedAt: Date,
  });
}

export function ProxyActionRequestSchema(): z.ZodObject<
  Properties<ProxyActionRequest>
> {
  return z.object({
    collect: definedNonNullAnySchema.nullish(),
    follow: definedNonNullAnySchema.nullish(),
  });
}

export function ProxyActionStatusResultSchema(): z.ZodObject<
  Properties<ProxyActionStatusResult>
> {
  return z.object({
    __typename: z.literal("ProxyActionStatusResult").optional(),
    status: definedNonNullAnySchema,
    txHash: string,
    txId: string,
  });
}

export const ProxyActionStatusTypesSchema = z.nativeEnum(
  ProxyActionStatusTypes
);

export function PublicMediaRequestSchema(): z.ZodObject<
  Properties<PublicMediaRequest>
> {
  return z.object({
    altTag: z.string().nullish(),
    cover: string.nullish(),
    itemCid: definedNonNullAnySchema,
    type: string.nullish(),
  });
}

export function PublicMediaResultsSchema(): z.ZodObject<
  Properties<PublicMediaResults>
> {
  return z.object({
    __typename: z.literal("PublicMediaResults").optional(),
    media: definedNonNullAnySchema,
    signedUrl: z.string(),
  });
}

export const PublicationContentWarningSchema = z.nativeEnum(
  PublicationContentWarning
);

export const PublicationMainFocusSchema = z.nativeEnum(PublicationMainFocus);

export const PublicationMediaSourceSchema = z.nativeEnum(
  PublicationMediaSource
);

export function PublicationMetadataContentWarningFilterSchema(): z.ZodObject<
  Properties<PublicationMetadataContentWarningFilter>
> {
  return z.object({
    includeOneOf: z.array(definedNonNullAnySchema).nullish(),
  });
}

export const PublicationMetadataDisplayTypesSchema = z.nativeEnum(
  PublicationMetadataDisplayTypes
);

export function PublicationMetadataFiltersSchema(): z.ZodObject<
  Properties<PublicationMetadataFilters>
> {
  return z.object({
    contentWarning: definedNonNullAnySchema.nullish(),
    locale: string.nullish(),
    mainContentFocus: z.array(definedNonNullAnySchema).nullish(),
    tags: definedNonNullAnySchema.nullish(),
  });
}

export function PublicationMetadataMediaInputSchema(): z.ZodObject<
  Properties<PublicationMetadataMediaInput>
> {
  return z.object({
    altTag: z.string().nullish(),
    cover: string.nullish(),
    item: string,
    source: definedNonNullAnySchema.nullish(),
    type: string.nullish(),
  });
}

export function PublicationMetadataStatusSchema(): z.ZodObject<
  Properties<PublicationMetadataStatus>
> {
  return z.object({
    __typename: z.literal("PublicationMetadataStatus").optional(),
    reason: z.string().nullish(),
    status: definedNonNullAnySchema,
  });
}

export const PublicationMetadataStatusTypeSchema = z.nativeEnum(
  PublicationMetadataStatusType
);

export function PublicationMetadataTagsFilterSchema(): z.ZodObject<
  Properties<PublicationMetadataTagsFilter>
> {
  return z.object({
    all: z.array(z.string()).nullish(),
    oneOf: z.array(z.string()).nullish(),
  });
}

export function PublicationMetadataV1InputSchema(): z.ZodObject<
  Properties<PublicationMetadataV1Input>
> {
  return z.object({
    animation_url: string.nullish(),
    appId: string.nullish(),
    attributes: z.array(z.lazy(() => definedNonNullAnySchema)),
    content: string.nullish(),
    description: string.nullish(),
    external_url: string.nullish(),
    image: string.nullish(),
    imageMimeType: string.nullish(),
    media: z.array(z.lazy(() => definedNonNullAnySchema)).nullish(),
    metadata_id: z.string(),
    name: z.string(),
    signatureContext: z.lazy(() => definedNonNullAnySchema.nullish()),
    version: z.string(),
  });
}

export function PublicationMetadataV2InputSchema(): z.ZodObject<
  Properties<PublicationMetadataV2Input>
> {
  return z.object({
    animation_url: string.nullish(),
    appId: string.nullish(),
    attributes: z.array(z.lazy(() => definedNonNullAnySchema)),
    content: string.nullish(),
    contentWarning: definedNonNullAnySchema.nullish(),
    description: string.nullish(),
    external_url: string.nullish(),
    image: string.nullish(),
    imageMimeType: string.nullish(),
    locale: string,
    mainContentFocus: definedNonNullAnySchema,
    media: z.array(z.lazy(() => definedNonNullAnySchema)).nullish(),
    metadata_id: z.string(),
    name: z.string(),
    signatureContext: z.lazy(() => definedNonNullAnySchema.nullish()),
    tags: z.array(z.string()).nullish(),
    version: z.string(),
  });
}

export function PublicationQueryRequestSchema(): z.ZodObject<
  Properties<PublicationQueryRequest>
> {
  return z.object({
    publicationId: string.nullish(),
    txHash: string.nullish(),
  });
}

export const PublicationReportingFraudSubreasonSchema = z.nativeEnum(
  PublicationReportingFraudSubreason
);

export const PublicationReportingIllegalSubreasonSchema = z.nativeEnum(
  PublicationReportingIllegalSubreason
);

export const PublicationReportingReasonSchema = z.nativeEnum(
  PublicationReportingReason
);

export const PublicationReportingSensitiveSubreasonSchema = z.nativeEnum(
  PublicationReportingSensitiveSubreason
);

export const PublicationReportingSpamSubreasonSchema = z.nativeEnum(
  PublicationReportingSpamSubreason
);

export function PublicationRevenueSchema(): z.ZodObject<
  Properties<PublicationRevenue>
> {
  return z.object({
    __typename: z.literal("PublicationRevenue").optional(),
    publication: definedNonNullAnySchema,
    revenue: definedNonNullAnySchema,
  });
}

export function PublicationRevenueQueryRequestSchema(): z.ZodObject<
  Properties<PublicationRevenueQueryRequest>
> {
  return z.object({
    publicationId: string,
  });
}

export function PublicationSearchResultSchema(): z.ZodObject<
  Properties<PublicationSearchResult>
> {
  return z.object({
    __typename: z.literal("PublicationSearchResult").optional(),
    items: z.array(definedNonNullAnySchema),
    pageInfo: definedNonNullAnySchema,
    type: definedNonNullAnySchema,
  });
}

export function PublicationSignatureContextInputSchema(): z.ZodObject<
  Properties<PublicationSignatureContextInput>
> {
  return z.object({
    signature: z.string(),
  });
}

export const PublicationSortCriteriaSchema = z.nativeEnum(
  PublicationSortCriteria
);

export function PublicationStatsSchema(): z.ZodObject<
  Properties<PublicationStats>
> {
  return z.object({
    __typename: z.literal("PublicationStats").optional(),
    commentsTotal: z.number(),
    id: string,
    totalAmountOfCollects: z.number(),
    totalAmountOfComments: z.number(),
    totalAmountOfMirrors: z.number(),
    totalDownvotes: z.number(),
    totalUpvotes: z.number(),
  });
}

export const PublicationTypesSchema = z.nativeEnum(PublicationTypes);

export function PublicationValidateMetadataResultSchema(): z.ZodObject<
  Properties<PublicationValidateMetadataResult>
> {
  return z.object({
    __typename: z.literal("PublicationValidateMetadataResult").optional(),
    reason: z.string().nullish(),
    valid: z.boolean(),
  });
}

export function PublicationsQueryRequestSchema(): z.ZodObject<
  Properties<PublicationsQueryRequest>
> {
  return z.object({
    collectedBy: string.nullish(),
    commentsOf: string.nullish(),
    cursor: definedNonNullAnySchema.nullish(),
    customFilters: z.array(definedNonNullAnySchema).nullish(),
    limit: number.nullish(),
    metadata: definedNonNullAnySchema.nullish(),
    profileId: string.nullish(),
    profileIds: z.array(string).nullish(),
    publicationIds: z.array(string).nullish(),
    publicationTypes: z.array(definedNonNullAnySchema).nullish(),
    sources: z.array(string).nullish(),
  });
}

export function ReactionEventSchema(): z.ZodObject<Properties<ReactionEvent>> {
  return z.object({
    __typename: z.literal("ReactionEvent").optional(),
    profile: definedNonNullAnySchema,
    reaction: definedNonNullAnySchema,
    timestamp: Date,
  });
}

export function ReactionFieldResolverRequestSchema(): z.ZodObject<
  Properties<ReactionFieldResolverRequest>
> {
  return z.object({
    profileId: string.nullish(),
  });
}

export function ReactionRequestSchema(): z.ZodObject<
  Properties<ReactionRequest>
> {
  return z.object({
    profileId: string,
    publicationId: string,
    reaction: definedNonNullAnySchema,
  });
}

export const ReactionTypesSchema = z.nativeEnum(ReactionTypes);

export function RecommendedProfileOptionsSchema(): z.ZodObject<
  Properties<RecommendedProfileOptions>
> {
  return z.object({
    disableML: z.boolean().nullish(),
    shuffle: z.boolean().nullish(),
  });
}

export function ReferenceModuleParamsSchema(): z.ZodObject<
  Properties<ReferenceModuleParams>
> {
  return z.object({
    degreesOfSeparationReferenceModule: definedNonNullAnySchema.nullish(),
    followerOnlyReferenceModule: z.boolean().nullish(),
    unknownReferenceModule: definedNonNullAnySchema.nullish(),
  });
}

export const ReferenceModulesSchema = z.nativeEnum(ReferenceModules);

export function RefreshRequestSchema(): z.ZodObject<
  Properties<RefreshRequest>
> {
  return z.object({
    refreshToken: string,
  });
}

export function RelRequestSchema(): z.ZodObject<Properties<RelRequest>> {
  return z.object({
    ethereumAddress: string,
    secret: z.string(),
  });
}

export function RelayErrorSchema(): z.ZodObject<Properties<RelayError>> {
  return z.object({
    __typename: z.literal("RelayError").optional(),
    reason: definedNonNullAnySchema,
  });
}

export const RelayErrorReasonsSchema = z.nativeEnum(RelayErrorReasons);

export function RelayerResultSchema(): z.ZodObject<Properties<RelayerResult>> {
  return z.object({
    __typename: z.literal("RelayerResult").optional(),
    txHash: string,
    txId: string,
  });
}

export function RemoveProfileInterestsRequestSchema(): z.ZodObject<
  Properties<RemoveProfileInterestsRequest>
> {
  return z.object({
    interests: z.array(definedNonNullAnySchema),
    profileId: string,
  });
}

export function ReportPublicationRequestSchema(): z.ZodObject<
  Properties<ReportPublicationRequest>
> {
  return z.object({
    additionalComments: z.string().nullish(),
    publicationId: string,
    reason: z.lazy(() => definedNonNullAnySchema),
  });
}

export function ReportingReasonInputParamsSchema(): z.ZodObject<
  Properties<ReportingReasonInputParams>
> {
  return z.object({
    fraudReason: z.lazy(() => definedNonNullAnySchema.nullish()),
    illegalReason: z.lazy(() => definedNonNullAnySchema.nullish()),
    sensitiveReason: z.lazy(() => definedNonNullAnySchema.nullish()),
    spamReason: z.lazy(() => definedNonNullAnySchema.nullish()),
  });
}

export function ReservedClaimableHandleSchema(): z.ZodObject<
  Properties<ReservedClaimableHandle>
> {
  return z.object({
    __typename: z.literal("ReservedClaimableHandle").optional(),
    expiry: Date,
    handle: string,
    id: definedNonNullAnySchema,
    source: z.string(),
  });
}

export function RevenueAggregateSchema(): z.ZodObject<
  Properties<RevenueAggregate>
> {
  return z.object({
    __typename: z.literal("RevenueAggregate").optional(),
    total: definedNonNullAnySchema,
  });
}

export function RevertCollectModuleSettingsSchema(): z.ZodObject<
  Properties<RevertCollectModuleSettings>
> {
  return z.object({
    __typename: z.literal("RevertCollectModuleSettings").optional(),
    contractAddress: string,
    type: definedNonNullAnySchema,
  });
}

export function RevertFollowModuleSettingsSchema(): z.ZodObject<
  Properties<RevertFollowModuleSettings>
> {
  return z.object({
    __typename: z.literal("RevertFollowModuleSettings").optional(),
    contractAddress: string,
    type: definedNonNullAnySchema,
  });
}

export const ScalarOperatorSchema = z.nativeEnum(ScalarOperator);

export function SearchQueryRequestSchema(): z.ZodObject<
  Properties<SearchQueryRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    customFilters: z.array(definedNonNullAnySchema).nullish(),
    limit: number.nullish(),
    query: definedNonNullAnySchema,
    sources: z.array(string).nullish(),
    type: definedNonNullAnySchema,
  });
}

export const SearchRequestTypesSchema = z.nativeEnum(SearchRequestTypes);

export function SensitiveReasonInputParamsSchema(): z.ZodObject<
  Properties<SensitiveReasonInputParams>
> {
  return z.object({
    reason: definedNonNullAnySchema,
    subreason: definedNonNullAnySchema,
  });
}

export function SetDefaultProfileBroadcastItemResultSchema(): z.ZodObject<
  Properties<SetDefaultProfileBroadcastItemResult>
> {
  return z.object({
    __typename: z.literal("SetDefaultProfileBroadcastItemResult").optional(),
    expiresAt: Date,
    id: string,
    typedData: definedNonNullAnySchema,
  });
}

export function SetDefaultProfileEip712TypedDataSchema(): z.ZodObject<
  Properties<SetDefaultProfileEip712TypedData>
> {
  return z.object({
    __typename: z.literal("SetDefaultProfileEIP712TypedData").optional(),
    domain: definedNonNullAnySchema,
    types: definedNonNullAnySchema,
    value: definedNonNullAnySchema,
  });
}

export function SetDefaultProfileEip712TypedDataTypesSchema(): z.ZodObject<
  Properties<SetDefaultProfileEip712TypedDataTypes>
> {
  return z.object({
    __typename: z.literal("SetDefaultProfileEIP712TypedDataTypes").optional(),
    SetDefaultProfileWithSig: z.array(definedNonNullAnySchema),
  });
}

export function SetDefaultProfileEip712TypedDataValueSchema(): z.ZodObject<
  Properties<SetDefaultProfileEip712TypedDataValue>
> {
  return z.object({
    __typename: z.literal("SetDefaultProfileEIP712TypedDataValue").optional(),
    deadline: number,
    nonce: number,
    profileId: string,
    wallet: string,
  });
}

export function SetDispatcherRequestSchema(): z.ZodObject<
  Properties<SetDispatcherRequest>
> {
  return z.object({
    dispatcher: string.nullish(),
    enable: z.boolean().nullish(),
    profileId: string,
  });
}

export function SignedAuthChallengeSchema(): z.ZodObject<
  Properties<SignedAuthChallenge>
> {
  return z.object({
    address: string,
    signature: string,
  });
}

export function SingleProfileQueryRequestSchema(): z.ZodObject<
  Properties<SingleProfileQueryRequest>
> {
  return z.object({
    handle: string.nullish(),
    profileId: string.nullish(),
  });
}

export function SpamReasonInputParamsSchema(): z.ZodObject<
  Properties<SpamReasonInputParams>
> {
  return z.object({
    reason: definedNonNullAnySchema,
    subreason: definedNonNullAnySchema,
  });
}

export function SybilDotOrgIdentitySchema(): z.ZodObject<
  Properties<SybilDotOrgIdentity>
> {
  return z.object({
    __typename: z.literal("SybilDotOrgIdentity").optional(),
    source: definedNonNullAnySchema,
    verified: z.boolean(),
  });
}

export function SybilDotOrgIdentitySourceSchema(): z.ZodObject<
  Properties<SybilDotOrgIdentitySource>
> {
  return z.object({
    __typename: z.literal("SybilDotOrgIdentitySource").optional(),
    twitter: definedNonNullAnySchema,
  });
}

export function SybilDotOrgTwitterIdentitySchema(): z.ZodObject<
  Properties<SybilDotOrgTwitterIdentity>
> {
  return z.object({
    __typename: z.literal("SybilDotOrgTwitterIdentity").optional(),
    handle: z.string().nullish(),
  });
}

export function TagResultSchema(): z.ZodObject<Properties<TagResult>> {
  return z.object({
    __typename: z.literal("TagResult").optional(),
    tag: string,
    total: z.number(),
  });
}

export const TagSortCriteriaSchema = z.nativeEnum(TagSortCriteria);

export function TimedFeeCollectModuleParamsSchema(): z.ZodObject<
  Properties<TimedFeeCollectModuleParams>
> {
  return z.object({
    amount: definedNonNullAnySchema,
    followerOnly: z.boolean(),
    recipient: string,
    referralFee: z.number(),
  });
}

export function TimedFeeCollectModuleSettingsSchema(): z.ZodObject<
  Properties<TimedFeeCollectModuleSettings>
> {
  return z.object({
    __typename: z.literal("TimedFeeCollectModuleSettings").optional(),
    amount: definedNonNullAnySchema,
    contractAddress: string,
    endTimestamp: Date,
    followerOnly: z.boolean(),
    recipient: string,
    referralFee: z.number(),
    type: definedNonNullAnySchema,
  });
}

export function TimelineRequestSchema(): z.ZodObject<
  Properties<TimelineRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
    metadata: definedNonNullAnySchema.nullish(),
    profileId: string,
    sources: z.array(string).nullish(),
    timelineTypes: z.array(definedNonNullAnySchema).nullish(),
  });
}

export const TimelineTypeSchema = z.nativeEnum(TimelineType);

export function TransactionErrorSchema(): z.ZodObject<
  Properties<TransactionError>
> {
  return z.object({
    __typename: z.literal("TransactionError").optional(),
    reason: definedNonNullAnySchema,
    txReceipt: definedNonNullAnySchema.nullish(),
  });
}

export const TransactionErrorReasonsSchema = z.nativeEnum(
  TransactionErrorReasons
);

export function TransactionIndexedResultSchema(): z.ZodObject<
  Properties<TransactionIndexedResult>
> {
  return z.object({
    __typename: z.literal("TransactionIndexedResult").optional(),
    indexed: z.boolean(),
    metadataStatus: definedNonNullAnySchema.nullish(),
    txHash: string,
    txReceipt: definedNonNullAnySchema.nullish(),
  });
}

export function TransactionReceiptSchema(): z.ZodObject<
  Properties<TransactionReceipt>
> {
  return z.object({
    __typename: z.literal("TransactionReceipt").optional(),
    blockHash: z.string(),
    blockNumber: z.number(),
    byzantium: z.boolean(),
    confirmations: z.number(),
    contractAddress: string.nullish(),
    cumulativeGasUsed: z.string(),
    effectiveGasPrice: z.string(),
    from: string,
    gasUsed: z.string(),
    logs: z.array(definedNonNullAnySchema),
    logsBloom: z.string(),
    root: z.string().nullish(),
    status: z.number().nullish(),
    to: string.nullish(),
    transactionHash: string,
    transactionIndex: z.number(),
    type: z.number(),
  });
}

export function TypedDataOptionsSchema(): z.ZodObject<
  Properties<TypedDataOptions>
> {
  return z.object({
    overrideSigNonce: number,
  });
}

export function UnfollowRequestSchema(): z.ZodObject<
  Properties<UnfollowRequest>
> {
  return z.object({
    profile: string,
  });
}

export function UnknownCollectModuleParamsSchema(): z.ZodObject<
  Properties<UnknownCollectModuleParams>
> {
  return z.object({
    contractAddress: string,
    data: ethers.Bytes,
  });
}

export function UnknownCollectModuleSettingsSchema(): z.ZodObject<
  Properties<UnknownCollectModuleSettings>
> {
  return z.object({
    __typename: z.literal("UnknownCollectModuleSettings").optional(),
    collectModuleReturnData: ethers.Bytes,
    contractAddress: string,
    type: definedNonNullAnySchema,
  });
}

export function UnknownFollowModuleParamsSchema(): z.ZodObject<
  Properties<UnknownFollowModuleParams>
> {
  return z.object({
    contractAddress: string,
    data: ethers.Bytes,
  });
}

export function UnknownFollowModuleRedeemParamsSchema(): z.ZodObject<
  Properties<UnknownFollowModuleRedeemParams>
> {
  return z.object({
    data: ethers.Bytes,
  });
}

export function UnknownFollowModuleSettingsSchema(): z.ZodObject<
  Properties<UnknownFollowModuleSettings>
> {
  return z.object({
    __typename: z.literal("UnknownFollowModuleSettings").optional(),
    contractAddress: string,
    followModuleReturnData: ethers.Bytes,
    type: definedNonNullAnySchema,
  });
}

export function UnknownReferenceModuleParamsSchema(): z.ZodObject<
  Properties<UnknownReferenceModuleParams>
> {
  return z.object({
    contractAddress: string,
    data: ethers.Bytes,
  });
}

export function UnknownReferenceModuleSettingsSchema(): z.ZodObject<
  Properties<UnknownReferenceModuleSettings>
> {
  return z.object({
    __typename: z.literal("UnknownReferenceModuleSettings").optional(),
    contractAddress: string,
    referenceModuleReturnData: ethers.Bytes,
    type: definedNonNullAnySchema,
  });
}

export function UpdateProfileImageRequestSchema(): z.ZodObject<
  Properties<UpdateProfileImageRequest>
> {
  return z.object({
    nftData: definedNonNullAnySchema.nullish(),
    profileId: string,
    url: string.nullish(),
  });
}

export function UserSigNoncesSchema(): z.ZodObject<Properties<UserSigNonces>> {
  return z.object({
    __typename: z.literal("UserSigNonces").optional(),
    lensHubOnChainSigNonce: number,
    peripheryOnChainSigNonce: number,
  });
}

export function ValidatePublicationMetadataRequestSchema(): z.ZodObject<
  Properties<ValidatePublicationMetadataRequest>
> {
  return z.object({
    metadatav1: z.lazy(() => definedNonNullAnySchema.nullish()),
    metadatav2: z.lazy(() => definedNonNullAnySchema.nullish()),
  });
}

export function VerifyRequestSchema(): z.ZodObject<Properties<VerifyRequest>> {
  return z.object({
    accessToken: string,
  });
}

export function WalletSchema(): z.ZodObject<Properties<Wallet>> {
  return z.object({
    __typename: z.literal("Wallet").optional(),
    address: string,
    defaultProfile: definedNonNullAnySchema.nullish(),
  });
}

export function WhoCollectedPublicationRequestSchema(): z.ZodObject<
  Properties<WhoCollectedPublicationRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
    publicationId: string,
  });
}

export function WhoReactedPublicationRequestSchema(): z.ZodObject<
  Properties<WhoReactedPublicationRequest>
> {
  return z.object({
    cursor: definedNonNullAnySchema.nullish(),
    limit: number.nullish(),
    publicationId: string,
  });
}

export function WhoReactedResultSchema(): z.ZodObject<
  Properties<WhoReactedResult>
> {
  return z.object({
    __typename: z.literal("WhoReactedResult").optional(),
    profile: definedNonNullAnySchema,
    reaction: definedNonNullAnySchema,
    reactionAt: Date,
    reactionId: string,
  });
}

export function WorldcoinIdentitySchema(): z.ZodObject<
  Properties<WorldcoinIdentity>
> {
  return z.object({
    __typename: z.literal("WorldcoinIdentity").optional(),
    isHuman: z.boolean(),
  });
}
